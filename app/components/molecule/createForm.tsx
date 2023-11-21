'use client';

import { useFormState } from 'react-dom';
import { createUserError } from '@/app/utils/actions/user';
import SubmitButton from '@/app/components/atom/button/submitButton';
import CommonInput from '@/app/components/atom/input/commonInput';

const initialState = {
  message: null,
};

const CreateForm = () => {
  const [state, formAction] = useFormState(createUserError, initialState);

  return (
    <form action={formAction} className="p-10">
      <CommonInput label={'username'} options={{ required: true }} />
      <SubmitButton />
      <p aria-live="polite" role="status">
        {state?.message}
      </p>
    </form>
  );
};

export default CreateForm;
