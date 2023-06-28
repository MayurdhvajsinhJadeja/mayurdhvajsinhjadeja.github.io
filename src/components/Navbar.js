import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'

const CustomLink = ({href, title, className=""})=>{
  const router = useRouter();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`
      h-[1px] inline-block bg-dark 
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className='w-full px-32 py-10 font-medium flex items-center'>
        
        <Logo />
        <nav className='absolute left-[75%]'>
            <CustomLink href="/" title="Home" className='mr-4' />
            <CustomLink href="/about" title="About" className='mx-4' />
            <CustomLink href="/projects" title="Projects" className='mx-4' />
            <CustomLink href="/blogs" title="Blogs" className='ml-4' />
        </nav>
        {/* <nav>
            <Link href="/" target={"_blank"}>Twitter</Link>
            <Link href="/" target={"_blank"}>Instagram</Link>
            <Link href="/" target={"_blank"}>LinkedIn</Link>
            <Link href="/" target={"_blank"}>Github</Link>
        </nav> */}
    </header>
  )
}

export default Navbar