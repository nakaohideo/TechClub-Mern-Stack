import React, { useEffect } from "react";
import NavigationBar from "./NavBar"; // Import your NavigationBar component
import { useLocation } from "react-router-dom";
import { Element } from "react-scroll";
import Icon from './Asset/icons.png'
import bg from './Asset/nice.jpg'
import './home.css'
import homeNext from './homeNext';
import SVG from './Asset/svg.svg'



const HomePage = () => {
  return (
    <div>
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-73px)] h-full overflow-hidden w-full">
     <div className='flex lg:justify-center items-center flex-col lg-w-1/4 m-auto'>
        {/* <span className='-mb-32 svgan'>
        <svg _id='ctc'
  version="1.0"
  xmlns="http://www.w3.org/2000/svg"
  width="400px"
  height="400px"
  viewBox="0 0 500.000000 500.000000"
  preserveAspectRatio="xMidYMid meet"
  className="mx-auto"
>

<g className="fill-current text-blue-500" strokeWidth="none" transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">
<path d="M1146 3338 c-26 -42 -361 -591 -500 -820 -76 -125 -136 -235 -134
-245 2 -12 17 -20 43 -25 22 -4 394 -7 826 -7 749 -1 787 0 802 17 14 16 17
44 17 179 0 143 -2 162 -18 177 -17 15 -68 16 -530 17 -390 0 -512 3 -512 12
1 7 49 89 108 182 l107 170 44 5 c24 3 48 12 53 20 26 46 137 323 132 331 -3
5 -99 9 -214 9 -206 0 -210 0 -224 -22z"/>
<path d="M3423 3339 c-10 -10 5 -52 124 -337 4 -9 17 -11 43 -7 l37 6 99 -166
c54 -92 97 -169 94 -171 -3 -3 -220 -4 -482 -4 -466 0 -478 0 -498 -20 -18
-18 -20 -33 -20 -176 0 -142 2 -159 21 -185 l20 -29 776 2 c699 3 777 5 786
19 8 12 1 30 -26 75 -65 107 -343 588 -384 664 -71 130 -170 294 -191 318 -21
21 -27 22 -205 22 -120 0 -187 -4 -194 -11z"/>
<path d="M1627 3173 c-84 -213 -85 -216 -56 -237 20 -14 66 -16 351 -16 l328
0 0 -630 0 -630 260 0 260 0 2 628 3 627 334 5 c291 4 335 7 344 21 7 12 -3
49 -41 145 -27 71 -60 157 -72 192 l-23 62 -812 0 -811 0 -67 -167z"/>
</g>
</svg>

        </span> */}
        <h1 className='text-9xl font-poppins text-yellow-500 font-bold'>CTC</h1>
        <h3 className='font-poppins font-semibold text-3xl'>Computer Technology Club</h3>
        <q className='font-poppins text-4xl capitalize lg:w-[800px] font-thin m-auto  text-center flex'>If You Want to go Faster Go Alone, If You want to Go Further Go Together</q>
        <button className='w-[150px] bg-slate-950 px-5 text-2xl py-2 text-white font-poppins font-bold rounded absolute bottom-5'>Explore</button>
     </div>

     <div
          className="bg absolute inset-0 bg-cover bg-center -z-10 "
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
    </div>
    </div>

  );
};

export default HomePage;
