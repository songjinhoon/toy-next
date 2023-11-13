import React, { FC } from 'react';
import { UserInput } from '@/app/types/input';

const PasswordInput: FC<UserInput> = ({ register, errors, options }) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Password
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
    </div>
  );
};

export default PasswordInput;
