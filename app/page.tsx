'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/signIn');
  }, []);

  return <div>HomePage</div>;
};

export default Home;
