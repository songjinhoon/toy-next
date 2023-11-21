import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  label: string;
  options?: {
    register?: UseFormRegister<any>;
    disabled?: boolean;
    required?: boolean;
  };
}

const CommonInput: FC<Props> = ({ label, options }) => {
  return (
    <>
      <label className="leading-7 text-sm text-gray-400">{label}</label>
      <input
        name={label}
        type="text"
        disabled={options?.disabled}
        required={options?.required}
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
        {...options?.register?.(label, {})}
      />
    </>
  );
};

export default CommonInput;
