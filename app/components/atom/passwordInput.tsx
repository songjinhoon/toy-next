import React, { FC } from 'react';
import { UserInput } from '@/app/types/input';

const PasswordInput: FC<UserInput> = ({ register, errors, options }) => {
  return (
    <div>
      <label>Password</label>
      <input
        autoComplete={'off'}
        style={options.readOnly ? { background: 'whitesmoke' } : {}}
        disabled={options.readOnly}
        readOnly={options.readOnly}
        type={'password'}
        {...register('password', {
          required: '비밀번호는 필수입니다.',
        })}
      />
      {errors && <p>{errors.message}</p>}
    </div>
  );
};

export default PasswordInput;
