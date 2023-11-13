import SignInForm from '@/app/components/molecule/signInForm';
import PageTileBox from '@/app/components/atom/pageTileBox';
import LinkBox from '@/app/components/molecule/linkBox';

const SignIn = () => {
  return (
    <>
      <PageTileBox text={'SignIn Page'} />
      <SignInForm></SignInForm>
      <LinkBox href={'/auth/signUp'} text={'회원가입 하러가기'} />
    </>
  );
};

export default SignIn;
