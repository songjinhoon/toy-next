import React, { FC } from 'react';
import { UserInput } from '@/app/types/input';

const TellNumInput: FC<UserInput> = ({ register, errors }) => {
  return (
    <div>
      <span>TellNum</span>
      <input
        {...register('tellNum', {
          required: '전화번호를 입력해주세요.',
        })}
      />
      {errors && <p>{errors.message}</p>}
    </div>
  );
};

export default TellNumInput;
