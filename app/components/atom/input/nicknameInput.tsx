import React, { FC } from 'react';
import { UserInput } from '@/app/types/input';

const NicknameInput: FC<UserInput> = ({ register, errors }) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Nickname
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register('nickname', {
            required: '닉네임은 필수입니다.',
            minLength: {
              value: 5,
              message: '5~20 사이의 길이만 가질 수 있습니다.',
            },
            maxLength: {
              value: 20,
              message: '5~20 사이의 길이만 가질 수 있습니다.',
            },
          })}
        />
        {errors && <p className={'text-red-400'}>{errors.message}</p>}
      </div>
    </div>
  );
};

export default NicknameInput;
