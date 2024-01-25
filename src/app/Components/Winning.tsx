import React from 'react'
import Image from "next/image";
import myBusness from '../Images/pexelskindelmedia.jpg';

export default function Winning() {
  return (
    <div className='w-full bg-white py-16'>
      <div className="max-w-5xl mx-auto  flex items-center ">
       <div className="flex flex-row-reverse items-center gap-10 justify-center centeredDiving">
            
       <div className="">
            <div className="">
                <div className="flex items-center gap-3">
                    <hr className='w-[100px]'/>
                    <h3>About us</h3>
                </div>
                <div className="flex flex-col py-4">
                    <h3 className='text-slate-900 text-xl'>We Are Award Winning SEO <br/> Company Sice 2010</h3>
              </div>
         </div>
         <div className="text-xs flex flex-col  text-slate-900 font-medium py-2">
          <p>Over 20 years working in SEO oriented services developing <br/> high-quality contents traffics to your website</p>
         </div>
         <div className="flex-col">
           <div className='flex items-center gap-4'>
            <p className='text-slate-900 font-medium text-xs'>Searching Engine Optimizations</p>
            <p className='font-bold text-xs'>95%</p>
           </div>

           <div className='flex items-center gap-4'>
           <p className='text-slate-900 font-medium  text-xs'>Digital Marketing</p>
            <p className='font-bold text-xs'>85%</p>
           </div>

           <div className='flex items-center gap-4'>
           <p className='text-slate-900 font-medium  text-xs'>Web Developments</p>
            <p className='font-bold text-xs'>90%</p>
           </div>
         </div>
       </div>
           

            <div className='relative'>
              <div className="mywidthFillGet">
                <Image src={myBusness} alt='' className='object-cover mywidthFill w-[500px] h-[500px]'/>
              </div>
              <div className="bg-blackig flex flex-col justify-center items-center py-2 w-[130px] h-[130px] absolute rounded-full bottom-[10%] right-[-5%]">
                <h3 className='font-semibold text-slate-900'>+900 k</h3>
                <p className='text-xs text-slate-900 font-semibold'>Digital Analysis</p>
            </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}
