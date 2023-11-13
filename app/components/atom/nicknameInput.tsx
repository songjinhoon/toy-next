import React, { FC } from 'react';
import { UserInput } from '@/app/types/input';

const NicknameInput: FC<UserInput> = ({ register, errors }) => {
  return (
    <div>
      <label>Nickname</label>
      <input
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
      {errors && <p>{errors.message}</p>}
    </div>
  );
};

export default NicknameInput;
