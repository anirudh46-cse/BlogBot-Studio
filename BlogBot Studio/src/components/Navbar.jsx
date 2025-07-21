import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

    const {navigate, token} = useAppContext()

  return (
    <div className='flex justify-between items-center by-5 mx-6 sm:mx-10 xl:mx-16'>
        <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-20 sm:w-40 cursor-pointer'/>
        <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>
            {token ? 'Dashboard' : 'Login'}
             <img src={assets.arrow} className='w-3' alt="arrow" />
        </button>
      
    </div>
  )
}

export default Navbar
