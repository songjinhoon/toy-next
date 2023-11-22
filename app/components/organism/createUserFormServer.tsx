import { createUser } from '@/app/utils/actions/user';
import CreateUserForm from '@/app/components/molecule/createUserForm';

const CreateUserFormServer = () => {
  async function formAction(formData: FormData) {
    'use server';
    const user: any = {};
    formData.forEach((value, key, parent) => {
      user[key] = value;
    });
    await createUser({
      ...user,
    });
  }

  return <CreateUserForm formAction={formAction}></CreateUserForm>;
};

export default CreateUserFormServer;
