import React from 'react'
import { FaPhone,  FaCirclePlay} from "react-icons/fa6";

export default function Heros() {
  return (
    <div className='w-full relative myBgmain'>

        <div className="">
            
            <div>
              {/* First part of is added now...*/}
              <div className="">
                <h3 className='myText'>#1 SEO COMPANY IN TANZANIA</h3>
              </div>

              <div className="">
                <h1>We Grow Your Revenue <b/>With Results-driven SEO</h1>
              </div>

              <div className="">
                <p>Our SEO services help drive traffic to your website by <br /> improving keyword rankings in search engines..</p>
                <p>We are leading award-winning digital marketingagaency and <br /> inbound marketing experts since 2005</p>
              </div>

              <div className="">
                <p>Get Started</p>
                <p><FaCirclePlay /></p>
              </div>
            </div>

            <div></div>
        </div>

    </div>
  )
}
