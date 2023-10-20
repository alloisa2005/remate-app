import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaCalendarAlt } from 'react-icons/fa'

import Mapa from './Mapa'

const NosEncontramos = () => {
  return (
    <div className="contenedor mb-4">
      <h1 className='font-poppins text-xl md:text-2xl text-primario border-b-2 border-primario'>¿Dónde nos encontramos?</h1>        
      <div className='flex flex-col md:flex-row gap-2 mt-5'>
        <div className='flex items-center gap-3 mb-3'>
          <FaLocationArrow size={23} className='text-primario'/>
          <p className='font-poppins'>Bv. Artigas esq Uruguay</p>
        </div>
        <div className='flex items-center gap-3 mb-3'>
          <BsFillTelephoneFill size={23} className='text-primario'/>
          <p className='font-poppins'>472 22990</p>
        </div>
        <div className='flex items-center gap-3 mb-3'>
          <BsWhatsapp size={26} className='text-primario'/>
          <p className='font-poppins'>098852722</p>
        </div>
        <div className='flex items-center gap-3 mb-3'>
          <GrMail size={23} className='text-primario'/>
          <p className='font-poppins'>imanzinimagli@gmail.com</p>
        </div>
        <div className='flex items-center gap-3'>
          <FaCalendarAlt size={23} className='text-primario'/>
          <p className='font-poppins'>imanzinimagli@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default NosEncontramos