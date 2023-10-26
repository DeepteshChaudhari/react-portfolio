import React from "react";

import mongoDB from "../assets/MongoDB_ForestGreen.png"
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/node.png";
import github from "../assets/github.png";
import express from "../assets/express.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      tittle: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      tittle: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      tittle: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      tittle: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: nodejs,
      tittle: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: mongoDB,
      tittle: "MongoDB",
      style: "shadow-green-900",
      pStyle: "h-20 w-22 sm:w-44 ",
    },
    {
      id: 7,
      src: express,
      tittle: "Express",
      style: "shadow-white",
      pStyle: "h-20 w-22 sm:w-44 ",
    },
    {
      id: 9,
      src: tailwind,
      tittle: "TailwindCSS",
      style: "shadow-sky-600",
    },
    {
      id: 8,
      src: github,
      tittle: "Github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="h-fit w-screen lg:h-screen bg-gradient-to-b from-gray-800 to-black p-4"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(
            ({ id, tittle, src, style, pStyle }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className={`w-20 mx-auto ${pStyle}`} />
                <p className="mt-4">{tittle}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
