import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-screen h-fit lg:max-h-max bg-gradient-to-b from-gray-800 to-black text-white p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          I'm excited to introduce myself as a passionate <span className="text-blue-500">full-stack web developer</span>. I'm eager to explore opportunities in <span className="text-blue-500">MERN development (MongoDB, Express.js, React.js, and Node.js)</span>. I love creating digital solutions that improve user experiences and help businesses succeed. What makes me unique is my dedication to delivering customized solutions on time. When you work with me, it's a journey. I carefully understand your vision to create a product that meets your goals. The result? Happy clients from various industries.
          I'm not just a tech expert; I'm also a clear communicator. I can explain complex code in simple terms, ensuring everyone understands. I focus on future-proof solutions to keep you ahead in technology. If you need a dedicated web developer, I believe my skills make me a great fit. I look forward to helping your organization succeed and bringing your digital ideas to life.</p>
        <br />
        <p className="text-xl">
          I'm also a clear communicator. I can explain complex code in simple terms, ensuring everyone understands. I focus on future-proof solutions to keep you ahead in technology. If you need a dedicated <span className="text-blue-500">MERN developer</span>, I believe my skills make me a great fit. I look forward to helping your organization succeed and bringing your digital ideas to life.
        </p>
      </div>
    </div>
  );
};

export default About;
