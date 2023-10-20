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
      <h1 className='titulo'>¿Dónde nos encontramos?</h1>        
      <div className='mt-5 flex flex-col md:flex-row gap-8 items-center'>        
        <div className='flex flex-col gap-5 w-full'>
          <div className='flex items-center gap-3 md:mb-3 border-b border-primario'>
            <FaLocationArrow size={23} className='mb-2 text-primario'/>
            <p className='font-poppins mb-2'>Bv. Artigas esq Uruguay <span className='font-bold hidden lg:inline'>(Paysandú - Uruguay)</span></p>            
          </div>
          <div className='flex items-center gap-3 md:mb-3 border-b border-primario'>
            <BsFillTelephoneFill size={23} className=' mb-2 text-primario'/>
            <p className='font-poppins mb-2'>472 22990</p>
          </div>
          <div className='flex items-center gap-3 md:mb-3 border-b border-primario'>
            <BsWhatsapp size={26} className=' mb-2 text-primario'/>
            <p className='font-poppins mb-2'>098852722</p>
          </div>
          <div className='flex items-center gap-3 md:mb-3 border-b border-primario'>
            <GrMail size={23} className='mb-2 text-primario'/>
            <p className='font-poppins mb-2'>imanzinimagli@gmail.com</p>
          </div>
          <div className='flex items-center gap-3 md:mb-3 border-b border-primario'>
            <FaCalendarAlt size={23} className='mb-2 text-primario'/>
            <p className='font-poppins mb-2'>imanzinimagli@gmail.com</p>
          </div>
        </div>
        <Mapa />
      </div>
    </div>
  )
}

export default NosEncontramos