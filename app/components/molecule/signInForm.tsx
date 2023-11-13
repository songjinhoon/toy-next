'use client';

import UsernameInput from '@/app/components/atom/usernameInput';
import PasswordInput from '@/app/components/atom/passwordInput';
import CommonButton from '@/app/components/atom/commonButton';
import React, { useCallback } from 'react';
import useUser from '@/app/hooks/useUser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpUser } from '@/app/types/user';

const SignInForm = () => {
  const { signIn } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpUser>({
    mode: 'onBlur',
  });

  const _onSubmit: SubmitHandler<ISignUpUser> = useCallback(async (data) => {
    await signIn(data);
  }, []);

  return (
    <form className={'bg-slate-200'} onSubmit={handleSubmit(_onSubmit)}>
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
      <CommonButton type={'submit'} text={'로그인'}></CommonButton>
    </form>
  );
};

export default SignInForm;
