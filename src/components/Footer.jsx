import React from 'react'
import {BsInstagram, BsFacebook} from 'react-icons/bs'

const Footer = () => {

  const anio = new Date().getFullYear();

  return (
    <div className='bg-primario py-3 text-white text-lg font-poppins flex justify-center items-center gap-3'>      
      <div className='flex items-center gap-2'>
        <h1>Creado por: aA Soft</h1>
        <BsInstagram size={20} className='text-white cursor-pointer hover:text-red-500 ease-out duration-300'/>
        <BsFacebook size={20} className='text-white cursor-pointer hover:text-blue-500 ease-out duration-300'/>
      </div>
      <h1>-</h1>
      <h1>Copyright &copy; Remates Sanchez {anio}</h1>
    </div>
  )
}

export default Footer