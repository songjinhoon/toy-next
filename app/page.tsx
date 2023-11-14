'use client';

import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  router.push('/auth/signIn')
  return <div>Home Pag11e</div>;
};

export default Home;
