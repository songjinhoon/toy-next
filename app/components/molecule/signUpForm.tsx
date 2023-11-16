'use client';

import UsernameInput from '@/app/components/atom/input/usernameInput';
import PasswordInput from '@/app/components/atom/input/passwordInput';
import NicknameInput from '@/app/components/atom/input/nicknameInput';
import TellNumInput from '@/app/components/atom/input/tellNumInput';
import AddressInput from '@/app/components/atom/input/addressInput';
import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpUser } from '@/app/types/user';
import useUser from '@/app/hooks/useUser';
import CommonButton from '@/app/components/atom/button/commonButton';

const SignUpForm = () => {
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

  return (
    <form onSubmit={handleSubmit(_onSubmit)} className={'bg-slate-100'}>
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
      <TellNumInput register={register} errors={errors.tellNum} options={{}} />
      <AddressInput register={register} errors={errors.address} options={{}} />
      <CommonButton type={'submit'} text={'회원가입'}></CommonButton>
    </form>
  );
};

export default SignUpForm;
