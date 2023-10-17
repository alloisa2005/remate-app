'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiMenu4Line } from 'react-icons/ri'
import { CgClose }  from 'react-icons/cg';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  }

  return (
    <div className='w-full h-[70px] bg-primario'>
      <nav className='max-w-[1350px] h-full mx-auto px-4 flex justify-between items-center'>
        
        <Link href={'/'} className='z-20'>
          <Image src={'/logo.jpeg'} width={110} height={55} alt='Remate Sanchez' />
        </Link>        

        <ul className='hidden lg:flex items-center gap-6 text-white font-poppins text-lg'>
        <li className='cursor-pointer hover:bg-white hover:text-primario p-2 rounded-md ease-in duration-100'>Inicio</li>
          <li className='cursor-pointer hover:bg-white hover:text-primario p-2 rounded-md ease-in duration-100'>Contacto</li>
          <li className='group cursor-pointer hover:bg-white hover:text-primario p-2 rounded-md ease-in duration-100'>Remates</li>
          <li className='cursor-pointer hover:bg-white hover:text-primario p-2 rounded-md ease-in duration-100'>Nosotros</li>
          <li className='cursor-pointer hover:bg-white hover:text-primario p-2 rounded-md ease-in duration-100'>Iniciar Sesión</li>
        </ul>

        <div className='lg:hidden cursor-pointer z-20' onClick={handleNavbar}>
          {navbar ? <CgClose size={25} className='text-white'/> : <RiMenu4Line size={25} className='text-white'/> }
        </div>        

        <div className={navbar ? 'z-10 lg:hidden fixed top-0 right-0 w-full md:w-[60%] h-full bg-primario ease-in duration-500' : 'z-10 lg:hidden fixed top-0 right-[-100%] w-full md:w-[70%] h-full bg-primario ease-in duration-500'}>        
          <ul className='mt-28 w-full h-full flex flex-col gap-8 text-white font-poppins text-2xl items-end px-6'>
            <li className='border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer'>Inicio</li>
            <li className='border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer'>Contacto</li>
            <li className='border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer'>Remates</li>
            <li className='border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer'>Nosotros</li>
            <li className='border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer'>Iniciar Sesión</li>
          </ul>
        </div>
      </nav>      
    </div>
  )
}

export default Navbar