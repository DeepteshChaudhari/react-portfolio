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
          I am thrilled to introduce myself as a highly enthusiastic and accomplished <span className="text-blue-500">full-stack web developer</span> , eager to explore exciting opportunities in the world of <span className="text-blue-500">MERN (MongoDB, Express.js, React.js, and Node.js)</span> development. My relentless passion for web development has propelled me to craft digital masterpieces, revolutionizing user experiences and driving businesses to new heights.
          What truly sets me apart is my unwavering dedication to delivering customized solutions with precision and an unwavering commitment to deadlines. When you collaborate with me, you embark on a transformative journey. I meticulously delve into your unique vision, ensuring that the final product aligns seamlessly with your objectives. The result? Satisfied clients from a wide array of industries who have praised my work.
        </p>
        <br />
        <p className="text-xl">
          In addition to my technical prowess, I excel as an effective and clear communicator. I bridge the gap between complex lines of code and a lucid understanding, ensuring that all stakeholders are on the same page. My forward-thinking approach guarantees that the solutions I deliver are not just for today but are also future-proofed, keeping you at the forefront of technological advancements.
          If you are seeking a dedicated and passionate web developer to join your team, I am confident that my skills and expertise make me the ideal candidate. I am excited about the prospect of contributing to your organization's success and bringing your digital vision to life.        </p>
      </div>
    </div>
  );
};

export default About;
