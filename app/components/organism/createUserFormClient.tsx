'use client';

import { useFormState } from 'react-dom';
import { createUserError } from '@/app/utils/actions/user';
import CreateUserForm from '@/app/components/molecule/createUserForm';

const initialState = {
  message: null,
};

const CreateUserFormClient = () => {
  const [state, formAction] = useFormState(createUserError, initialState);

  return (
    <CreateUserForm formAction={formAction} state={state}></CreateUserForm>
  );
};

export default CreateUserFormClient;
