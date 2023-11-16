import PageTileBox from '@/app/components/atom/input/pageTileBox';
import React from 'react';
import LinkBox from '@/app/components/molecule/linkBox';
import SignUpForm from '@/app/components/molecule/signUpForm';

const SignUp = () => {
  return (
    <>
      <PageTileBox text={'SignUp Page'} />
      <SignUpForm></SignUpForm>
      <LinkBox href={'/auth/signIn'} text={'로그인 하러가기'} />
    </>
  );
};

export default SignUp;
