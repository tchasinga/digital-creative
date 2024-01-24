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
            <div className="bg-blackig flex flex-col justify-center items-center py-2 w-[130px] h-[130px] absolute rounded-full bottom-[15%] right-[70%]">
                <h3 className='font-semibold text-slate-900'>+900 k</h3>
                <p className='text-xs text-slate-900'>Digital Analysis</p>
            </div>
          </div>
            {/* Seconds div is show-up */}
         <div className="">
            <div className="flex flex-col">
                <div className="flex items-center gap-3">
                    <hr className='w-[100px]'/>
                    <h3>About us</h3>
                </div>
                <div className="flex flex-col items-center ">
                    <h3 className='text-slate-900 text-xl'>We Are Award Winning SEO <br/> Company Sice 2010</h3>
            </div>
         </div>
         <div className="text-xs flex flex-col items-center">
          <p>Over 20 years working in SEO oriented services developing <br/> high-quality contents traffics to your website</p>
         </div>
       </div>
    </div>
    </div>
  )
}
