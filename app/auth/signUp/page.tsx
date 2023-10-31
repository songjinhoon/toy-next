'use client';

import { useForm } from 'react-hook-form';
import { ISignUpUser } from '@/app/types/user';
import UsernameInput from '@/app/components/input/usernameInput';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpUser>({
    mode: 'onBlur',
  });

  return (
    <>
      <div>SignUp PAGE</div>
      <UsernameInput
        register={register}
        errors={errors.username}
        options={{ readOnly: false }}
      />
    </>
  );
};

export default SignUp;
