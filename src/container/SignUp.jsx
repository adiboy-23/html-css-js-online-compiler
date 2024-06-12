import React from 'react'
import { Logo } from '../assets'

const SignUp = () => {
  return (
    <div className='w-full py-6'>
        <img
              src={Logo}
              alt="logo"
              className="object-contain w-72 h-auto"
            ></img>
        <div className='w-full flex flex-col item-center justify-center py-8'>
            <p className='py-12 text-2xl text-primaryText'>Join with us for an amazing journey</p>
            <div className='px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-coli tem-center justify-center gap-8'></div>
        </div>
    </div>
  )
}

export default SignUp