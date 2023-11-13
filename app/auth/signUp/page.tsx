import PageTileBox from '@/app/components/atom/pageTileBox';
import React from 'react';
import LinkBox from '@/app/components/molecule/linkBox';
import SignUpForm from '@/app/components/molecule/signUpForm';

const SignUp = () => {
  /*useEffect(() => {
    // 이거 url 직접입력해서 로그인페이지로 오는거 막기위해 필요함
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);*/

  return (
    <>
      <PageTileBox text={'SignUp Page'} />
      <SignUpForm></SignUpForm>
      <LinkBox href={'/auth/signIn'} text={'로그인 하러가기'} />
    </>
  );
};

export default SignUp;
