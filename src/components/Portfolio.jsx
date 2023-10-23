import React from "react";
import fitneeLogger from "../assets/portfolio/FITNESSLOGGER.png";
import astus from "../assets/portfolio/Astus.png";
import brandQuube from "../assets/portfolio/BrandQuube.png";
import restro from "../assets/portfolio/restro.png";
import vj from "../assets/portfolio/vj.png";
import wheather from "../assets/portfolio/wheather.png";

const Portfolio = () => {
  const cards = [
    {
      id: 1,
      src: fitneeLogger,
      link: "https://fitnesslogger.netlify.app",
      code: "https://github.com/DeepteshChaudhari/fitness-logger",
    },
    {
      id: 2,
      src: astus,
      link: "https://astus.netlify.app",
      code: "https://github.com/DeepteshChaudhari/Astus",
    },
    {
      id: 3,
      src: brandQuube,
      link: "https://brand-quube.netlify.app",
      code: "https://github.com/DeepteshChaudhari/BQ-Website",
    },
    {
      id: 4,
      src: restro,
      link: "https://restro-page-by-deeptesh.netlify.app",
      code: "https://github.com/DeepteshChaudhari/restro-page",
    },
    {
      id: 5,
      src: vj,
      link: "https://vj-landingpage.netlify.app",
      code: "https://github.com/DeepteshChaudhari/VJ-Portia-Website",
    },
    {
      id: 6,
      src: wheather,
      link: "https://weather-app-by-deeptesh.netlify.app",
      code: "https://github.com/DeepteshChaudhari/weather-app",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-fit lg:h-screen p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8 flex flex-col items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">
          {cards.map(({ id, src, link, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <a href={link} className="px-6 py-1 m-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg duration-300 hover:scale-105">Demo</a>
                <a href={code} className="px-6 py-1 m-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg duration-300 hover:scale-105">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
