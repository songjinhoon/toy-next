import { FC } from 'react';
import { UserInput } from '@/app/types/input';

const UsernameInput: FC<UserInput> = ({ register, errors, options }) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Email
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
    </div>
  );
};

export default UsernameInput;
