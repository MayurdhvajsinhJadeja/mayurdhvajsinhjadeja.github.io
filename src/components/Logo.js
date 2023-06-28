import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import logo from "../../public/images/profile/logo-white.png"

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center absolute left-[5%]'>
        <MotionLink href="/" className='w-14 h-14 bg-dark text-light flex items-center justify-center text-2xl font-bold rounded-full'
        whileHover={{
            scale: [1.1, 1.1, 1.1, 1.1],
            rotate: [0, -45, 45, 0],
            borderRadius: ["50%", "20%", "20%", "50%"],
            scale:1.1
        }}
        ><div><Image src={logo} width={30} alt='MJ'/></div></MotionLink>
    </div>
  )
}

export default Logo