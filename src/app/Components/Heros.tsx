import React from 'react'
import { FaPhone,  FaCirclePlay} from "react-icons/fa6";
import 'animate.css';

export default function Heros() {
  return (
    <div className='w-full relative myBgmain'>

        <div className="">
            
            <div>
              {/* First part of is added now...*/}
              <div className="">
                <h3 className='myText font-semibold text-xs'>#1 SEO COMPANY IN TANZANIA</h3>
              </div>

              <div className="text-white text-3xl font-semibold my-5">
                <h1>We Grow Your Revenue With <br /> Results-driven SEO</h1>
              </div>

              <div className="text-xs text-slate-300 font-medium my-5">
                <p>Our SEO services help drive traffic to your website by <br /> Improving keyword rankings in search engines..</p>
                <p>We are leading award-winning digital marketing agency and <br /> Inbound marketing experts since 2005</p>
              </div>

              <div className="flex items-center gap-5">
               <div className="myTextbg py-2 px-5 text-white font-semibold text-xs">
                  <p>Get Started</p>
               </div>
                <p><FaCirclePlay className='myColorIc text-3xl animate__heartBeat animate__animated cursor-pointer'/></p>
              </div>
            </div>

            <div></div>
        </div>

    </div>
  )
}
