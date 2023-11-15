import { FC } from 'react';
import { UserInput } from '@/app/types/input';

const UsernameInput: FC<UserInput> = ({ register, errors, options }) => {
  return (
    <div className="relative mb-4">
      <label htmlFor="name" className="leading-7 text-sm text-gray-400">
        Email
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        style={options.readOnly ? { background: 'whitesmoke' } : {}}
        disabled={options.readOnly}
        {...register('username', {
          required: '이메일 주소는 필수입니다.',
          minLength: {
            value: 10,
            message: '10~20 사이의 길이만 가질 수 있습니다.',
          },
          maxLength: {
            value: 20,
            message: '10~20 사이의 길이만 가질 수 있습니다.',
          },
          pattern: {
            value:
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            message: '이메일 형식을 확인해주세요.',
          },
        })}
      />
      {errors && <p className={'text-red-400'}>{errors.message}</p>}
    </div>
  );
};

export default UsernameInput;
