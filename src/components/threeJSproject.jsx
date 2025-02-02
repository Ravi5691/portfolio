import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import GUI from "lil-gui";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    /**
     * Base
     */
    // const gui = new GUI();
    const scene = new THREE.Scene();

    // Canvas
    const canvas = mountRef.current;

    // Axis Helper
    const axisHelper = new THREE.AxesHelper();
    scene.add(axisHelper);

    /**
     * Textures
     */
    const textureLoader = new THREE.TextureLoader();
    const matcap = textureLoader.load("/static/textures/matcaps/8.png");
    const matcapTexture = textureLoader.load("/static/textures/matcaps/3.png");

    /**
     * Font Load
     */
    const fontLoader = new FontLoader();
    fontLoader.load(
      "/fonts/helvetiker_regular.typeface.json",
      (font) => {
        const textGeometry = new TextGeometry("Ravinder", {
          font: font,
          size: 1,
          height: 0.3,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 5,
        });

        textGeometry.center();

        const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcap });
        const text = new THREE.Mesh(textGeometry, textMaterial);
        scene.add(text);

        console.time("donuts");

        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
        const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });

        for (let i = 0; i < 300; i++) {
          const donut = new THREE.Mesh(donutGeometry, donutMaterial);
          donut.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
          donut.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
          const scale = Math.random();
          donut.scale.set(scale, scale, scale);
          scene.add(donut);
        }

        console.timeEnd("donuts");
      },
      undefined,
      (error) => {
        console.error("Error loading font:", error);
        alert("Failed to load font. Please check the file path.");
      }
    );

    /**
     * Sizes
     */
    const sizes = { width: window.innerWidth, height: window.innerHeight };

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    /**
     * Camera
     */
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(1, 1, 2);
    scene.add(camera);

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Controls
     */
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    /**
     * Animation
     */
    const clock = new THREE.Clock();
    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      console.log("Rendering frame..."); // Debugging line
      window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("resize", handleResize);
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
      renderer.dispose();
    };
  }, []);

  return <canvas ref={mountRef} className="z-10" style={{ width: "100%", height: "100vh", display: "block",}} />;
};

export default ThreeScene;
