import React from 'react'
import seosearch from '../Projects/Objects'

export default function Codedriving() {
  return (
    <div className='myBgmainB'>
      <div className="max-w-5xl mx-auto">
        {/* New code is now add in section One */}
     <div className="">
     <div className="flex items-center text-slate-400 gap-3">
        <hr className='w-[100px]'/>
        <p>Statics</p>
        </div>

        <div className="">
          <h1 className='text-slate-200 text-2xl font-semibold'>Why We Can Deliever Great <br /> SEO ROI Driven Results</h1>
        </div>
        <div className='mygridtemplate'>
          {seosearch.map((index, i) => (
            <div key={i} className='flex flex-col '>
               <h1>{index.name}</h1>
               <p>{index.details}</p>
            </div>
          ))}
        </div>
     </div>
     {/* this gonna be section two */}

      </div>
    </div>
  )
}
