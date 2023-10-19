'use client';

import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const MyModal = ({title, setModal}) => {
  return (
    <div className='absolute w-full h-full top-0 left-0 z-30 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='w-full md:w-1/2  bg-white rounded-lg p-4 mx-4'>
          <div className='flex items-center justify-between'>
            <p className='text-center font-poppins text-3xl text-red-500 uppercase'>{title}</p>
            <AiFillCloseCircle 
                className='text-red-500 text-4xl cursor-pointer hover:text-red-800 ease-out duration-300' 
                onClick={setModal}
            />
          </div>
          <div className='font-poppins mt-6 lg:mt-5 mb-7 lg:mb-5'>
            <p className='text-lg md:text-xl'>¿Está seguro que desea eliminar todo?</p>
          </div>

          <div className=' mt-4 text-right'>
            <button className='bg-red-500 hover:bg-red-800 ease-out duration-300 text-white font-poppins font-bold py-2 px-4 rounded'>Aceptar</button>            
          </div>
      </div>      
    </div>
  )
}

export default MyModal