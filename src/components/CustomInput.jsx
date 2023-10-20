'use client';

import React from "react";
import { GrMail } from "react-icons/gr";
import {RiLockPasswordFill} from 'react-icons/ri'

const CustomInput = ({ title, type, placeholder, value, onChange }) => {
  return (
    <>
      <label
        for="input-group-1"
        className="font-poppins block mb-1 text-md lg:text-lg font-bold text-primario dark:text-white"
      >
        {title}
      </label>
      <div className="relative mb-6">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {title === 'Email' ? <GrMail size={22} className="text-primario" /> : <RiLockPasswordFill size={22} className="text-primario" />}
        </div>
        <input
          value={value}
          onChange={onChange}
          type={type}
          id="input-group-1"
          className="font-poppins border border-primario text-gray-900 text-md rounded-lg focus:ring-primario focus:border-primario block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default CustomInput;
