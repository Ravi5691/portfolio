import React from "react";
import CardHoverEffect from "./cardHoverEffect";
import ContactForm from "./contactForm";
// import ThreeScene from "./threeJSproject";

const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};

const Portfolio = () => {
  return (
    <div className="text-white bg-black h-screen w-screen overflow-x-hidden">
      <div className="w-full h-full flex justify-center relative">
        {/* nav */}
        <div className="fixed  tracking-wide lg:tracking-widest flex gap-5 lg:gap-10 text-sm lg:text-lg  p-4 lg:p-5 mt-2 lg:mt-5 lg:rounded-3xl rounded-xl backdrop-blur-3xl bg-[rgba(0,0,0,0.43)]  lg:right-10 z-30 font-mono">
          <button
            onClick={() => handleScroll("section1")}
            className="cursor-pointer text-gray-400 hover:text-white"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("section2")}
            className="cursor-pointer text-gray-400 hover:text-white"
          >
            AboutMe
          </button>
          <button
            onClick={() => handleScroll("section3")}
            className="cursor-pointer text-gray-400 hover:text-white"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("section4")}
            className="cursor-pointer text-gray-400 hover:text-white"
          >
            ContactMe
          </button>
        </div>

        {/* link */}
        <div className=" bg-white border-2 border-white z-20 h-10 w-10 rounded-full fixed bottom-18 lg:right-10 right-5">
          <a href="https://github.com/ravi5691">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              viewBox="0 0 16 16"
              id="github"
            >
              <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
            </svg>
          </a>
        </div>
        <div className=" bg-white border-2 border-white z-20 h-10 w-10 rounded-full fixed bottom-5 lg:right-10 right-5">
          <a href="https://www.linkedin.com/in/ravinder-singh-bisht">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              viewBox="0 0 32 32"
              id="linked"
            >
              <g id="Flat_copy_5">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 8.836 7.163 16 16 16s16-7.164 16-16c0-8.837-7.163-16-16-16z"></path>
                <path
                  fill="#FFF"
                  d="M24.294 22.942v-6.137c0-3.288-1.755-4.818-4.096-4.818-1.889 0-2.735 1.039-3.206 1.768v-1.517h-3.558c.047 1.005 0 10.704 0 10.704h3.558v-5.978c0-.319.023-.639.117-.867.257-.639.842-1.301 1.825-1.301 1.288 0 1.803.981 1.803 2.42v5.727l3.557-.001zM9.685 10.777c1.24 0 2.013-.823 2.013-1.85-.023-1.05-.773-1.849-1.99-1.849s-2.012.799-2.012 1.849c0 1.028.772 1.85 1.967 1.85h.022zm1.779 12.165V12.238H7.907v10.704h3.557z"
                ></path>
              </g>
            </svg>
          </a>
        </div>

        {/* content */}
        <div className="h-full w-full relative">
          {/* Blur bubble */}
          <div className="fixed lg:h-[50%] h-30 w:30  lg:w-[30%] lg:top-50 top-90 lg:-right-60 -right-60 z-10">
            <div
              className=" w-60 h-60 bg-pink-500 absolute bg-blend-lighten top-60 opacity-25 right-10 rounded-full pointer-events-none"
              style={{
                transform: "translate(-50%, -50%)",
                filter: "blur(50px)",
                zIndex: 50,
              }}
            />
            <div
              className=" w-60 h-60 bg-purple-600 absolute bg-blend-lighten top-50 opacity-25 left-10 rounded-full pointer-events-none"
              style={{
                transform: "translate(-50%, -50%)",
                filter: "blur(50px)",
                zIndex: 50,
              }}
            />
            <div
              className=" w-60 h-60 bg-blue-500 bg-blend-lighten absolute top-30 right-20 opacity-25 rounded-full pointer-events-none"
              style={{
                transform: "translate(-50%, -50%)",
                filter: "blur(50px)",
                zIndex: 50,
              }}
            />
          </div>
          <div className="fixed h-[50%] lg:w-[30%] w-[50%] lg:-top-30 -top-30 lg:-left-10 left-5 z-10">
            <div
              className=" w-60 h-60 bg-pink-500 absolute bg-blend-lighten top-60 opacity-25 right-10 rounded-full pointer-events-none "
              style={{
                transform: "translate(-50%, -50%)",
                filter: "blur(50px)",
                zIndex: 50,
              }}
            />
            <div
              className=" w-60 h-60 bg-purple-600 absolute bg-blend-lighten top-50 opacity-25 left-10 rounded-full pointer-events-none"
              style={{
                transform: "translate(-50%, -50%)",
                filter: "blur(50px)",
                zIndex: 50,
              }}
            />
            <div
              className=" w-60 h-60 bg-blue-500 bg-blend-lighten absolute top-30 right-20 opacity-25 rounded-full pointer-events-none"
              style={{
                transform: "translate(-50%, -50%)",
                filter: "blur(50px)",
                zIndex: 50,
              }}
            />
          </div>
          <div className="fixed h-[50%] w-[30%] -bottom-70 left-80 z-10">
            <div
              className=" w-80 h-80 bg-purple-600 absolute bg-blend-lighten top-50 opacity-25 left-10 rounded-full pointer-events-none sm:block hidden"
              style={{
                transform: "translate(-50%, -50%)",
                filter: "blur(50px)",
                zIndex: 50,
              }}
            />
          </div>
          {/* page1 */}
          <div
            id="section1"
            className="lg:h-full h-70 w-full bg-grid-custom relative"
          >
            <div className="relative w-full h-full bg-[#000000] shadow-inner shadow-black/10 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
            <div className="text-white absolute top-30 font-mono tracking-wider lg:text-9xl text-4xl font-bold scale-y-110 lg:mx-20 mx-10 lg:p-10 p-0">
              <h3 className="text-xl lg:text-3xl tracking-wide">Hi all. I'm</h3>
              <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                RAVINDER <br /> SINGH BISHT
              </h1>
              <h3 className="text-xl lg:text-3xl tracking-wide">
                an Frontend Developer from{" "}
                <span className="bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
                  INDIA
                </span>
                .
              </h3>
            </div>
          </div>
          {/* page2 */}
          <div id="section2" className=" w-full">
            <div className="flex lg:flex-row flex-col lg:m-10 mx-2 my-10 lg:my-20  place-items-center">
              <div className="lg:w-[60%] w-full lg:p-20 p-7 tracking-wider">
                <h1 className="lg:text-5xl text-2xl font-mono pb-10 font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ">
                  About Me
                </h1>
                <span className="lg:text-xl text-sm font-mono leading-1 lg:leading-10">
                  I'm Ravinder Singh Bisht, a passionate frontend developer with a focus on crafting engaging and user-centric web experiences. My expertise spans <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">HTML</span>, <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">CSS</span>, <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">JavaScript</span>, <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">React</span>, and <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">Tailwind CSS</span>. I'm also skilled in animation libraries such as <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">GSAP</span> and <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">Locomotive Scroll</span>. Currently, I'm expanding my skills in <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">Three.js</span> for 3D graphics and interactive visuals. I thrive on transforming ideas into visually appealing and functional websites, always eager to explore cutting-edge technologies that redefine the web's possibilities.
                </span>
              </div>
              <div>
                <img
                  src="/assets/user.jpg"
                  alt="profile_pic"
                  className="rounded-4xl lg:ml-15 lg:mt-13 m-5 lg:h-auto lg:w-[400px] h-auto w-60 border-2 z-20 contrast-100 brightness-100 saturate-100 relative"
                />
              </div>
            </div>
          </div>
          {/* page3 */}
          <div id="section3" className=" w-full font-mono ">
            <h1 className="lg:text-5xl text-2xl lg:m-20 m-5 lg:px-10 px-5 font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Projects
            </h1>
            <div className=" lg:px-20 px-3">
              <CardHoverEffect />
            </div>
          </div>
          {/* page4 */}
          <div id="section4" className=" h-[90%] w-full font-mono ">
            <div className="lg:m-20 m-5">
              <h1 className="lg:text-5xl text-2xl lg:px-10 px-5 lg:mb-10 mb-0 lg:mt-30 mt-10 font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <ContactForm />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
