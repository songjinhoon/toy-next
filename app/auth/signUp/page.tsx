'use client';

import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpUser } from '@/types/user';
import UsernameInput from '@/app/components/input/usernameInput';
import AddressInput from '@/app/components/input/addressInput';
import PasswordInput from '@/app/components/input/passwordInput';
import NicknameInput from '@/app/components/input/nicknameInput';
import TellNumInput from '@/app/components/input/tellNumInput';
import Link from 'next/link';
import useUser from '@/hooks/useUser';

const SignUp = () => {
  const { signUp } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpUser>({
    mode: 'onBlur',
  });

  const _onSubmit: SubmitHandler<ISignUpUser> = useCallback(async (data) => {
    await signUp(data);
  }, []);

  /*useEffect(() => {
    // 이거 url 직접입력해서 로그인페이지로 오는거 막기위해 필요함
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);*/

  return (
    <>
      <div>SignUp PAGE</div>
      <form onSubmit={handleSubmit(_onSubmit)}>
        <UsernameInput
          register={register}
          errors={errors.username}
          options={{ readOnly: false }}
        />
        <PasswordInput
          register={register}
          errors={errors.password}
          options={{ readOnly: false }}
        />
        <NicknameInput
          register={register}
          errors={errors.nickname}
          options={{}}
        />
        <TellNumInput
          register={register}
          errors={errors.tellNum}
          options={{}}
        />
        <AddressInput
          register={register}
          errors={errors.address}
          options={{}}
        />
        <button type={'submit'}>회원가입</button>
      </form>
      <div>
        <p>회원이신가요?</p>
        <Link href={'/sign-in'}>로그인 하러가기</Link>
      </div>
    </>
  );
};

export default SignUp;
