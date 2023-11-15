import SignInForm from '@/app/components/molecule/signInForm';
import LinkBox from '@/app/components/molecule/linkBox';

const SignIn = () => {
  return (
    <div className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-20">
      <SignInForm></SignInForm>
      <LinkBox href={'/auth/signUp'} text={'회원가입 하러가기'} />
    </div>
  );
};

export default SignIn;
