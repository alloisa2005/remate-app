'use client';
import CustomInput from '@/components/CustomInput';
import React, { useState } from 'react'

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='contenedor mb-4 flex flex-col items-center'>
      <h1 className='text-center text-2xl font-poppins font-bold text-primario '>Iniciar Sesión</h1>

      <form className='my-6 w-full md:w-[40%]'>
        <CustomInput title='Email' type='email' placeholder='name@mail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        <CustomInput title='Password' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>        
      </form>
    </div>
  )
}

export default SignIn