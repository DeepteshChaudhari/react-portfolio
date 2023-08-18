import React from "react";

const About = () => {
   return (
    <div
      name="about"
      className="w-screen sm:h-fit lg:max-h-max bg-gradient-to-b from-gray-800 to-black text-white p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Introducing{" "}
          <span className="text-blue-500">Deeptesh</span>, a trailblazing full
          stack web developer with an unwavering passion for{" "}
          <span className="text-blue-500">MERN development.</span>
          Harnessing the power of MongoDB, Express.js, React.js, and Node.js,
          Deeptesh crafts digital masterpieces that redefine user experiences
          and elevate businesses to unprecedented heights.

          Collaborating with Deeptesh means a transformative experience. They
          dive deep into your vision, delivering tailor-made solutions
          flawlessly and on schedule.

          Client satisfaction drives Deeptesh's work ethic, earning them
          unwavering praise across diverse industries.
        </p>
        <br />
        <p className="text-xl">
          Beyond technical virtuosity, Deeptesh excels as an avid communicator,
          bridging the gap between code and clarity.

          Their forward-thinking approach ensures future-proofed solutions,
          keeping you ahead of the curve.

          For startups, SMEs, or enterprises seeking unparalleled digital
          success, Deeptesh is the ultimate partner. Elevate your brand and
          witness your dreams turn into realities.
        </p>
      </div>
    </div>
  );
};

export default About;
