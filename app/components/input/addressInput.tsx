import React, { FC } from 'react';
import { UserInput } from '@/types/input';

const AddressInput: FC<UserInput> = ({ register, errors }) => {
  return (
    <div>
      <label>Address</label>
      <input
        {...register('address', {
          required: '주소를 입력해주세요.',
        })}
      />
      {errors && <p>{errors.message}</p>}
    </div>
  );
};

export default AddressInput;
