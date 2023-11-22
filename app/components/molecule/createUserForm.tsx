import CommonInput from '@/app/components/atom/input/commonInput';
import SubmitButton from '@/app/components/atom/button/submitButton';
import { FC } from 'react';

interface Props {
  formAction: any;
  state?: any;
}

const CreateUserForm: FC<Props> = ({ formAction, state }) => {
  return (
    <form action={formAction} className="p-10 pt-0">
      <CommonInput label={'username'} options={{ required: true }} />
      <CommonInput label={'password'} options={{ required: true }} />
      <CommonInput label={'nickname'} options={{ required: true }} />
      <CommonInput label={'email'} options={{ required: true }} />
      <CommonInput label={'tellNum'} options={{ required: true }} />
      <CommonInput label={'address'} options={{ required: true }} />
      <p className="text-red-400 text-center text-2xl mb-5">{state?.message}</p>
      <SubmitButton />
    </form>
  );
};

export default CreateUserForm;
