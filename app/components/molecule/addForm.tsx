import CommonInput from '@/app/components/atom/input/commonInput';
import CommonButton from '@/app/components/atom/button/commonButton';
import { createUser } from '@/app/utils/actions/user';

const AddForm = () => {
  async function submit(formData: FormData) {
    'use server';
    const user: any = {};
    let pointer = 0;
    formData.forEach((value, key, parent) => {
      if (pointer !== 0) {
        user[key] = value;
      }
      pointer++;
    });
    await createUser({
      ...user,
    });
  }

  return (
    <form action={submit} className="p-10">
      <CommonInput label={'username'} />
      <CommonInput label={'password'} />
      <CommonInput label={'nickname'} />
      <CommonInput label={'email'} />
      <CommonInput label={'tellNum'} />
      <CommonInput label={'address'} />
      <CommonButton type={'submit'} text={'create'}></CommonButton>

    </form>
  );
};

export default AddForm;
