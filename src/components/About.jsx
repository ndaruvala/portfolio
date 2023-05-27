import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bol inline border-b-4 border-pink-600">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Nader, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am currently a junior at Carnegie Mellon. As a computer science major,
              I am passionate about problem-solving and writing correct, efficient, and readable
              code. I have an interest in software development, finance, and machine learning. My
              extensive list of personal projects and my involvement in TAUV (Tartan Autonomous
              Underwater Vehicle) showcase my passion for problem-solving and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
