import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-primario'>
      <nav className='contenedor h-[70px] flex justify-between items-center'>
        <Link href={'/'}>
          <Image src={'/logo.jpeg'} width={50} height={50} alt='Remate Sanchez' />
        </Link>

        <ul className='flex items-center gap-10'>
          <li>Contacto</li>
          <li>Remates</li>
          <li>Nosotros</li>
          <li>Inicia Sesión</li>
        </ul>

      </nav>      
    </div>
  )
}

export default Navbar