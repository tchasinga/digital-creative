"use client"

import React from 'react'
import { IoIosHome } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RiCustomerServiceFill } from "react-icons/ri";
import { SiCloudflarepages } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";

export default function FooterNav() {
  return (
    <div className="footContainer  bg-blue-300 fixed bottom-0 left-0 right-0">
            <div className=" flex py-5 justify-evenly items-center ">
                 <div className="text-2xl">
                    <IoIosHome/>
                 </div>
                 <div className="text-2xl">
                    <IoMdInformationCircleOutline/>
                 </div>
                 <div className="text-2xl">
                    <RiCustomerServiceFill/>
                 </div>
                 <div className="text-2xl">
                    <SiCloudflarepages/>
                 </div>
                 <div className="text-2xl">
                    <RiContactsFill/>
                 </div>
            </div>
        </div>
  )
}
