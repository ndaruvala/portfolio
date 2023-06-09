import React from "react";
import HTMLImg from "../assets/html.png";
import CSSImg from "../assets/css.png";
import ReactImg from "../assets/react.png";
import PythonImg from '../assets/python.png'
import CPPImg from '../assets/cpp.png'
import JavaImg from '../assets/java.png'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-4">// These are the technologies I've worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 py-2 mx-auto" src={PythonImg} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 py-2 mx-auto" src={CPPImg} alt="C/C++ icon" />
            <p className="my-4">C/C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 py-2 mx-auto" src={JavaImg} alt="Java icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 py-2 mx-auto" src={HTMLImg} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 py-2 mx-auto" src={CSSImg} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 py-2 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
