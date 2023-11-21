'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const UserInfo = () => {
  const router = useRouter();

  // 인증여부는 간단하게 처리하고 추후에 JWT로 변경
  const checker = () => {
    if (localStorage.getItem('id')) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!checker()) {
      router.push('/auth/signIn');
    }
  }, [router]);

  return <></>;
};

export default UserInfo;
