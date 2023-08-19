import React from "react";
import HeroImage from "../assets/my-profile.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full pt-28 pb-8 px-4 md:flex-row">
        <div className="flex flex-col justify-center h-fit">
          <div className="text-blue-300 font-signature"><RiDoubleQuotesL size={60}/></div>
          <h2 className="text-4xl md:text-7xl font-bold text-white hover:scale-105 duration-700">
            I'm a Full stack Developer
          </h2>
          <p className="pt-4 text-gray-500 max-w-md hover:scale-105 duration-500">
            who takes pride in crafting captivating digital solutions, driving
            client satisfaction, and ensuring future-proofed success for
            startups, SMEs, and enterprises alike.
          </p>
          <div className="text-blue-300 font-signature"><RiDoubleQuotesR size={60}/>
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
        <div>
          <img
            className="rounded-2xl md:w-96"
            src={HeroImage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
