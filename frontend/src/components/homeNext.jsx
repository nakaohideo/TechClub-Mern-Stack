import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Main from "./Asset/main.png";
import course from "./Asset/course.png";
import window from "./Asset/window.png";
import Icons from "./Asset/icons.png";
import Dot from "./Asset/dot.png";
import Bob from "./Asset/bob.svg";
import Footer from "./Footer";
import "./animate.css";
function HomeNext() {
  return (
    <div>
      <div className="mt-5 p-10 lg:w-10/12 m-auto">
        <div className="mb-10 relative w-full">
          <h1 className=" font-bold font-poppins text-4xl">
            Welcome to the Tech Playground: <i> Where Curiosity Meets Code!</i>
          </h1>
          <div className="absolute w-52 h-52 rounded-full bg-pink-500 top-0 left-0 -z-10 filter blur-xl opacity-20 animate"></div>
          <div className="absolute w-52 h-52 rounded-full bg-blue-500 bottom-0 opacity-20 right-0 -z-10 filter blur-xl animatetwo"></div>

          <p className="text-gray-900 font-normal text-start text-sm mt-5 capitalize">
            Hey there! 👋 Ever find yourself wondering where all the tech
            enthusiasts hang out? Look no further! 🚀 We're like a cozy spot on
            the internet where tech magic happens, and we're here for everyone.
            So, what's got you curious? Need some tech advice, a good laugh, or
            maybe just a friendly chat about all things tech? Whatever it is,
            you're in the right place! 🌐✨
          </p>
          <p className="text-gray-900 font-normal text-sm text-start mt-5 capitalize">
            Alright, let me break it down. Whether you're a tech newbie or a
            tech whiz, this is your crew. 🤝 We're here to simplify the tech
            world, answering your questions and sharing everything from the
            latest tech trends to tips on fixing your gadgets or setting up that
            new software. Got a tech win (or a tech woe)? We're all ears! 🚀 So,
            grab a virtual seat, and let's explore the world of tech together.
          </p>
          <p className="text-gray-900 font-normal text-sm mt-5 text-start capitalize">
            And guess what? We're not just about coding! 🛠️🤖 We're students on
            a tech journey, and we're open to anyone interested in joining the
            fun. Whether you're into programming, maintenance, tutorials, or
            even diving into the world of AI, we've got something for you. Ready
            for an adventure? Let's do it! 🚀🔧💻
          </p>
        </div>
        <h1 className="font-poppins font-bold text-4xl text-center ">
          Club Services
        </h1>
        <p className="w-full m-auto flex justify-center items-center mt-5 font-poppins font-normal text-gray-500 p-5 whitespace-no-wrap">
          Welcome to the Computer Technology Club (CTC), your gateway to a world
          of tech excellence and support! At CTC, we are dedicated to providing
          a myriad of services tailored to empower and uplift students in their
          technological journey. Here's a glimpse into what we offer:
        </p>
        <div className=" m-auto gap-5  rounded-xl p-5 flex flex-col items-center mt-5 font-poppins font-normal text-gray-500">
          {/* First div */}
          <div className="flex flex-col lg:flex-row justify-around gap-5 items-center w-full relative">
            {/* <div className="absolute w-52 h-52 rounded-full bg-green-500 top-20 left-30 -z-10 filter blur-xl opacity-20 animate"></div> */}
            <div className="flex flex-col items-center text-center justify-center p-5 rounded-lg cursor-pointer ">
              <img src={Main} alt="maintenance" />
              <h1 className="font-poppins text-black text-2xl font-semibold border-t-2 border-white">
                Maintenance
              </h1>
              <p className="mt-5 lg:w-[300px]">
                Our team of skilled technicians is here to ensure that your
                devices run seamlessly. From troubleshooting to regular
                maintenance, we've got your tech covered, so you can focus on
                what matters most—your studies.
              </p>
            </div>
            <div className="cursor-pointer flex flex-col items-center justify-center p-5 rounded-lg text-center">
              <img src={course} alt="course" />
              <h1 className="font-poppins text-black text-2xl font-semibold border-t-2 border-white">
                Course Tutorial
              </h1>
              <p className="mt-5 lg:w-[400px]">
                Unlock the full potential of your academic pursuits with our
                comprehensive course tutorials. Whether you're delving into
                programming, web development, or mastering the latest software,
                our tutorials are designed to guide you every step of the way.
              </p>
            </div>
          </div>
          {/* second div */}
          <div className="flex flex-col lg:flex-row justify-around gap-5 items-center w-full mt-5 text-center relative">
            {/* <div className="absolute w-52 h-52 rounded-full bg-pink-500 top-0 left-0 -z-10 filter blur-xl opacity-20 animate"></div> */}
            <div className="cursor-pointer flex flex-col items-center justify-center p-5 rounded-lg ">
              <img src={window} alt="IT" />
              <h1 className="font-poppins text-black text-2xl font-semibold border-t-2 border-white">
                IT Service
              </h1>
              <p className="mt-5 lg:w-[300px]">
                Navigating the vast landscape of Information Technology can be
                daunting. Fear not! CTC provides top-notch IT services, offering
                solutions to technical challenges and ensuring a smooth digital
                experience for all students.
              </p>
            </div>
            <div className="cursor-pointer flex flex-col items-center justify-center p-5  rounded-lg text-center">
              <img src={Icons} alt="icons" />
              <h1 className="font-poppins text-black text-2xl font-semibold border-t-2 border-white">
                Programming
              </h1>
              <p className=" mt-5 lg:w-[300px]">
                For the aspiring coders and software developers, our programming
                resources are designed to sharpen your skills. Dive into the
                world of coding with confidence, from beginner-friendly lessons
                to advanced programming challenges.
              </p>
            </div>
          </div>
          <div className="cursor-pointer flex flex-col items-center justify-center p-5 rounded-lg text-center relative">
            {/* Remove the extra closing curly brace below */}
            <div className="absolute w-52 h-52 rounded-full bg-blue-500 bottom-0 opacity-20 right-0 -z-10 filter blur-xl animatetwo"></div>
            <h1 className="font-poppins text-black text-2xl font-semibold border-t-2 border-white">
              Student-Centric Support:
            </h1>
            <p className="mt-5 w-full">
              At CTC, we prioritize your success. Beyond technical expertise, we
              are committed to providing a supportive community for students.
              Connect with like-minded peers, participate in workshops, and
              access resources that go beyond the classroom to foster your
              growth. Embark on your tech journey with CTC, where innovation
              meets education. Join us in shaping the future of technology and
              empowering students to thrive in a digital world.
            </p>
          </div>
          <NavLink
            to="/contact"
            className={`relative text-white block font-semibold bg-slate-900 p-5 font-poppins`}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomeNext;
