import React, { FC } from 'react';
import { UserInput } from '@/app/types/input';

const AddressInput: FC<UserInput> = ({ register, errors }) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Address
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register('address', {
            required: '주소를 입력해주세요.',
          })}
        />
        {errors && <p className={'text-red-400'}>{errors.message}</p>}
      </div>
    </div>
  );
};

export default AddressInput;
