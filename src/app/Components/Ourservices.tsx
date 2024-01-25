"use client" 

import React from 'react'
import solution from '../Projects/ObjectTwo'
import { motion } from "framer-motion"

export default function Ourservices() {

  const variants = {
    visible : {
      opacity: 1,
      x: 0,
      // transition : {type: "spring", stiffness: 100, damping:100},
      transition : {staggerChildren: 1}
    },
    hidden:{opacity : 0},
  }

  return (
    <div className='bgCodeOfBackground py-32'>
     <div className="max-w-5xl mx-auto ">
       <div className="flex flex-col justify-center text-center">
       <div className="flex items-center text-slate-400 gap-3 py-3">
         <hr className='w-[100px]'/>
         <p className='text-orange-800'>Services</p>
        </div>
        <div className="text-slate-900 text-3xl">
             <h2>What solution we provide to <br /> Our valued customers</h2>
        </div>
       </div>

       {/* Adding my grid side */}

       <div className="">
          <motion.div className="mygridtemplateTlm gap-4 py-10" initial="hidden" animate="visible" variants={variants}>
            {solution.map((solution, index) => (
              <motion.div key={index} variants={variants} className="bg-white rounded-lg shadow-lg p-5">
                <div className="flex items-center justify-center">
                  <div className="text-4xl bg-blue-800 text-white p-3 rounded-full">
                    {solution.Icon}
                  </div>
                </div>
               <div className="justify-center flex-col flex items-center text-center">
               <div className="text-slate-900 text-xl font-semibold my-2">
                  {solution.name}
                </div>
                <div className="text-slate-400 text-sm line-clamp-3">{solution.details}</div>
               </div>
              </motion.div>
            ))}
          </motion.div>
       </div>     
    </div>
    </div>
  )
}
