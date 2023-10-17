import React from "react";
import { FaLocationArrow, FaCalendarAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

const Nosotros = () => {
  return (
    <div className="max-w-[1350px] h-full mx-auto px-4 mt-7 md:mt-10">
      <div className="flex flex-col border rounded-b-lg shadow-lg mb-7 md:mb-10">
        <h1 className="font-poppins text-2xl md:text-3xl font-bold bg-primario p-2 text-white">
          Historia
        </h1>
        <div className="mt-4 px-2 pb-3">
          <p className="text-lg font-poppins mb-4">
            Nacimos el 2 de agosto de 1970.
          </p>
          <p className="text-lg font-poppins text-justify md:text-start">
            Rematamos todos los domingos en nuestra clásica esquina en Uruguay y
            Bulevard Artigas en la ciudad de Paysandú. Rematamos Muebles,
            materiales de construcción, antiguedades, Adornos y más.
          </p>
        </div>
      </div>

      <div className="flex flex-col border rounded-b-lg shadow-lg mb-7 md:mb-10">
        <h1 className="font-poppins text-2xl md:text-3xl font-bold bg-primario p-2 text-white">
          ¿Cómo comprar?
        </h1>
        <div className="mt-4 px-2 pb-3">
          <p className="text-lg font-poppins text-justify md:text-start">
            Luego de finalizada la subasta el pago se pueden realizar por
            transferencia bancaria o directamente en nuestro local. El pago debe
            realizarse dentro de los 2 días hábiles finalizada la subasta.
          </p>
        </div>
      </div>

      <div className="flex flex-col border rounded-b-lg shadow-lg mb-7 md:mb-10">
        <h1 className="font-poppins text-[22px] md:text-3xl font-bold bg-primario p-2 text-white">
          ¿Cómo retiro la mercadería?
        </h1>
        <div className="mt-4 px-2 pb-3">
          <p className="text-lg font-poppins text-justify md:text-start">
            El comprador tiene para retirar la mercadería 3 días hábiles
            finalizada la subasta. En caso de estar fuera del departamento de
            Paysandú, se le enviara a cualquier parte del país, costo del flete
            a cargo del comprador. El comprador es responsable por su oferta. En
            caso de no retirar lo que compra no le recibiremos ofertas futuras.
          </p>
        </div>
      </div>

      <div className="flex flex-col border rounded-b-lg shadow-lg mb-7 md:mb-10">
        <h1 className="font-poppins text-[22px] md:text-3xl font-bold bg-primario p-2 text-white">
          ¿Donde nos encontramos?
        </h1>
        <div className="mt-4 px-2 pb-3">
          <div className="flex items-center gap-3 font-poppins py-2">
            <FaLocationArrow size={20} className='text-primario'/>            
            <p>Bv. Artigas esq Uruguay (Paysandú)</p>
          </div>
          <div className="flex items-center gap-3 font-poppins py-2">
            <BsFillTelephoneFill size={20} className='text-primario'/>            
            <p>(+598) 4722-2990</p>
          </div>
          <div className="flex items-center gap-3 font-poppins py-2">
            <GrMail size={20} className='text-primario'/>            
            <p>imanzinimagli@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 font-poppins py-2">
            <FaCalendarAlt size={20} className='text-primario'/>  
            <div>
              <p className="mb-1"><span className="font-bold">Lun a Vie:</span> 8:00 a 12:00 hs - 14:00 a 18:00 hs</p>
              <p><span className="font-bold">Sábados:</span> 8:00 a 12:00 hs - 15:00 a 18:00 hs</p>
            </div>                      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
