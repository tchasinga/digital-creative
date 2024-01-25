"use client";

import React, { useState } from 'react';
import { FaPhone,  FaCirclePlay} from "react-icons/fa6";
import 'animate.css';
import Image from "next/image";
import myBusness from '../Images/pexelstimamiroshniche.jpg';
import { motion } from "framer-motion"
import 

export default function Heros() {

  const [displayVideo, setDisplayVideo] = useState(false);

  const hendlerShowVideo = () => {
    setDisplayVideo(true)
  }

  const variants = {
    visible : {
      opacity: 1,
      x: 0,
      y: 0,
      transition : {type: "spring", stiffness: 100, damping:100},
      // transition : {staggerChildren: 1}
    },
    hidden:{opacity : 0},
  }

  return (
    <div className='w-full relative myBgmain '>

        <motion.div className="flex items-center justify-between max-w-5xl mx-auto  centeredDive py-32" initial="hidden" animate="visible" variants={variants}>
            
            <div>
              {/* First part of is added now...*/}
              <div className="">
                <h3 className='myText font-semibold text-xs'>#1 SEO COMPANY IN TANZANIA</h3>
              </div>

              <div className="text-white text-3xl font-semibold my-5">
                <h1>We Grow Your Revenue With <br /> Results-driven SEO</h1>
              </div>

              <div className="text-sm text-slate-300 font-medium my-5">
                <p>Our SEO services help drive traffic to your website by <br /> Improving keyword rankings in search engines..</p>
                <p>We are leading award-winning digital marketing agency and <br /> Inbound marketing experts since 2005</p>
              </div>

              <div className="flex items-center gap-5 relative">
               <div className="myTextbg py-2 px-5 text-white font-semibold text-xs rounded">
                  <p>Get Started</p>
               </div>
                <p><FaCirclePlay onClick={hendlerShowVideo} className='myColorIc text-3xl animate__heartBeat animate__animated cursor-pointer'/></p>
              </div>
            </div>

            <div>
              <div className="mywidthFillGet">
                <Image src={myBusness} alt='' className='object-cover mywidthFill w-[500px] h-[500px]'/>
              </div>
            </div>
        </motion.div>

        {displayVideo && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9999] flex justify-center items-center">
                    <video width="560" height="315" controls className="rounded-2xl">
                      <source src="./video/thinking.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  
                )}

        <div className="w-[200px] h-[200px] bg-red-600 absolute rounded-full bottom-[70%] right-[95%]"></div>

    </div>
  )
}
