import Image from 'next/image'
import React from 'react'

const CarouselItem = ({title, imageSrc}) => {
  return (
    <div className='w-full h-[380px] relative'>
        <Image src={imageSrc} alt='Foto 1' width={1000} height={400} className='w-full h-full object-cover'/>
        <div className='absolute bottom-10 left-0 w-full'>          
          <div className='flex justify-center w-full'>
            <h1 className='bg-gray-500/80 px-6 py-4 md:px-20 md:py-6 lg:px-36 lg:py-8 rounded-lg text-4xl text-white font-poppins'>{title}</h1>          
          </div>
        </div>
      </div> 
  )
}

export default CarouselItem