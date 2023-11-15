import React, { FC } from 'react';
import { UserInput } from '@/app/types/input';

const PasswordInput: FC<UserInput> = ({ register, errors, options }) => {
  return (
    <div className="relative mb-4">
      <label htmlFor="name" className="leading-7 text-sm text-gray-400">
        Password
      </label>
      <input
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        autoComplete={'off'}
        style={options.readOnly ? { background: 'whitesmoke' } : {}}
        disabled={options.readOnly}
        readOnly={options.readOnly}
        type={'password'}
        {...register('password', {
          required: '비밀번호는 필수입니다.',
        })}
      />
      {errors && <p className={'text-red-400'}>{errors.message}</p>}
    </div>
  );
};

export default PasswordInput;
