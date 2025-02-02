"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for merging Tailwind classes
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Hover Effect Component
export default function CardHoverEffect() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-screen h-full">
    <div className="lg:max-w-6xl max-w-4xl lg:ml-22 ml-0 lg:mx-20 mx-5 lg:px-8 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 gap-5">
      {projects.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardImage>{item.image}</CardImage>
          </Card>
        </a>
      ))}
    </div>
    </div>
  );
}

// Card Component
function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full lg:p-4 p-2 overflow-hidden bg-black border border-transparent dark:border-white/20 group-hover:border-slate-700 relative z-10",
        className
      )}
    >
      <div className="relative lg:z-10 z-10 p-4">{children}</div>
    </div>
  );
}

// Card Title Component
function CardTitle({ className, children }) {
  return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2", className)}>{children}</h4>;
}

// Card Description Component
function CardDescription({ className, children }) {
  return (
    <p className={cn("lg:mt-4 mt-0 pb-2 text-zinc-400 lg:tracking-wide tracking-normal lg:leading-relaxed leading-1 lg:text-sm text-[10px] ", className)}>
      {children}
    </p>
  );
}

// Card Image Component
function CardImage({ className, children }) {
  return (
    <img
      src={children}
      alt="Card Image"
      className={cn("w-full h-auto object-cover", className)}
    />
  );
}

// Project Data
const projects = [
  {
    title: "Canvas-Scroll Trigger",
    description: "This project is focused on practicing canvas animation techniques and integrating GSAP ScrollTrigger for scroll-based animations. It combines GSAP's powerful animation capabilities for interactive user experiences.",
    // link: "https://stripe.com",
    image: "/assets/strollTrigger.png",
  },
  {
    title: "Three JS ",
    description:
      "I am currently acquiring knowledge on the use of the Three.js library for 3D animation. This image demonstrates a basic 3D text animation created with Three.js.",
    // link: "https://netflix.com",
    image: "/assets/threejs.png",
  },
  {
    title: "Netflix Clone",
    description: "This project is my first attempt at creating a Netflix clone using HTML and CSS, focusing on layout design and responsive elements to replicate the platform's user interface.",
    // link: "https://google.com",
    image: "/assets/netflixclone.png",
  },
  {
    title: "Weather App",
    description: "This project is created to practice API handling, using the Weather API to retrieve information and incorporating a location attribute for more personalized data retrieval.",
    // link: "https://meta.com",
    image: "/assets/weatherapp.png",
  },
];
