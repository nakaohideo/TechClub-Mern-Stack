import React, { useEffect } from "react";
import NavigationBar from "./NavBar"; // Import your NavigationBar component
import { useLocation } from "react-router-dom";
import { Element } from "react-scroll";
import Icon from "./Asset/icons.png";
import bg from "./Asset/nice2.png";
import "./home.css";
import homeNext from "./homeNext";
import SVG from "./Asset/svg.svg";
import "./animate.css";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-73px)] h-full overflow-hidden w-full relative">
        <div className="absolute w-52 h-52 rounded-full bg-pink-500 top-0 left-0 -z-10 filter blur-xl opacity-20 animate"></div>
        <div className="absolute w-52 h-52 rounded-full bg-blue-500 bottom-0 opacity-20 right-0 -z-10 filter blur-xl animatetwo"></div>
        <div className="flex lg:justify-center items-center flex-col lg-w-1/4 m-auto">
          <h1 className="text-9xl font-poppins text-yellow-500 font-bold">
            CTC
          </h1>
          <h3 className="font-poppins font-semibold text-3xl">
            Computer Technology Club
          </h3>
          <q className="font-poppins text-4xl capitalize lg:w-[800px] font-thin m-auto  text-center flex">
            If You Want to go Faster Go Alone, If You want to Go Further Go
            Together
          </q>
          <button className="w-[150px] bg-slate-950 px-5 text-2xl py-2 text-white font-poppins font-bold rounded absolute bottom-5">
            Explore
          </button>
        </div>

        <div
          className="bg absolute inset-0 bg-cover bg-center -z-10 filter blur-sm"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      </div>
    </div>
  );
};

export default HomePage;
