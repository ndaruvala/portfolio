import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "./Navbar";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Nader Daruvala</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm an aspiring Software Engineer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Currently, I'm a junior at Carnegie Mellon University pursuing a bachelor's degree in
          Computer Science and a Concentration in Computer Systens.
        </p>
        <div>
          <button className="text-white group hover:scale-105 duration-300 border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={50}
              duration={600}
              className="flex flex-row items-center"
            >
              <span>View Work</span>
              <span className="group-hover:rotate-90 group-hover:-translate-y-1 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
