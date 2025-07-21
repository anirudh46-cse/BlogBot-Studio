import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col md:flex-row items-start jusstify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
        <div>
            <img src={assets.logo} alt="logo" className='h-40 w-40' />

            <p className='max-w-[410px] mt-6'> Made with creativity, powered by AI. BlogBot Studio helps every idea find its perfect voice.</p>
        </div>
        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
            {footer_data.map((section, index)=> (
                <div key={index}>
                    <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                    <ul className='text-sm space-y-1'>
                        {section.links.map((link, i)=> (
                            <li key={i}>
                                <a href='#' className='hover:underline transition'>{link}</a>
                            </li>
                       ) )}
                    </ul>
                     </div>
            ))}

        </div>

        </div>
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'> <span className="font-bold">Copyright 2025 © BlogBot Studio - All Right Reserved.</span> <br />Built for creators. Powered by AI. Styled with purpose.</p>
      
    </div>
  )
}

export default Footer
