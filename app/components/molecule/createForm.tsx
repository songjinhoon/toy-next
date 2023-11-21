'use client';

import { useFormState } from 'react-dom';
import { createUser } from '@/app/utils/actions/user';
import SubmitButton from '@/app/components/atom/button/submitButton';
import { useEffect } from 'react';

const initialState = {
  message: null,
};

const CreateForm = () => {
  const [state, formAction] = useFormState(createUser, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <form action={formAction}>
      <label htmlFor="todo">Enter Task</label>
      <input type="text" id="todo" name="todo" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
};

export default CreateForm;
