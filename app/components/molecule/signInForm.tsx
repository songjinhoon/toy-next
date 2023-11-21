'use client';

import UsernameInput from '@/app/components/atom/input/usernameInput';
import PasswordInput from '@/app/components/atom/input/passwordInput';
import CommonButton from '@/app/components/atom/button/commonButton';
import React, { useCallback } from 'react';
import useUser from '@/app/hooks/useUser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpUser } from '@/app/types/user';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
  const router = useRouter();
  const { signIn } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpUser>({
    mode: 'onBlur',
  });

  const _onSubmit: SubmitHandler<ISignUpUser> = useCallback(
    async (data) => {
      await signIn(data);
      router.push('/dashboard');
    },
    [signIn, router],
  );

  return (
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
      <CommonButton type={'submit'} text={'Sign In'}></CommonButton>
    </form>
  );
};

export default SignInForm;
