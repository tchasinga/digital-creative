import React from 'react'
import Image from "next/image";
import myBusness from '../Images/pexelskindelmedia.jpg';

export default function Winning() {
  return (
    <div className='w-full bg-white h-screen'>
       <div className="max-w-5xl mx-auto">
           {/* first code is added...*/}
          <div className="relative">
            <div className='w-10 h-[655px] bg-slate-950 rounded-full sticker rotate-[35deg]'></div>
            <div className="w-[500px] h-[500px] rounded-[50%] bg-blue-400 absolute bottom-[10%] right-[70%]">
                <div className="top-[1%] left-[5%] absolute">
                <Image src={myBusness} alt='' className='object-cover rounded-[50%] w-[500px] h-[500px] '/>
                </div>
            </div>
          </div>
           
            {/* Seconds div is show-up */}
       </div>
    </div>
  )
}
