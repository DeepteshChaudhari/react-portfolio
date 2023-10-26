import React from "react";
import HeroImage from "../assets/myPic.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div
      name="home"
      className="w-screen h-fit lg:h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full pt-28 pb-8 px-4 md:flex-row">
        <div className="flex flex-col justify-center h-fit">
          <div className="text-blue-300 font-signature">
            <RiDoubleQuotesL size={60} />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-white hover:scale-105 duration-700">
            I'm a Full stack Developer
          </h2>
          <p className="pt-4 text-gray-500 max-w-md hover:scale-105 duration-500">
            Someone who enjoys creating amazing digital solutions, making clients happy, and ensuring long-term success for startups, small businesses, and big companies.
          </p>
          <div className="text-blue-300 font-signature">
            <RiDoubleQuotesR size={60} />
          </div>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={700}
              className="group text-white w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-700"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" size={17} />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-fit border-b-4 border-blue-400">
          <img
            className="md:w-96 m-auto px-4 pt-4"
            src={HeroImage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
