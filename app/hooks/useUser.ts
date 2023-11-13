import { useCallback } from 'react';
import { ISignInUser, ISignUpUser } from '@/app/types/user';
import Api from '@/app/utils/axiosConfig';
import { useRouter } from 'next/navigation';

const useUser = () => {
  const router = useRouter();

  const signUp = useCallback(async (params: ISignUpUser) => {
    try {
      const response = await Api.post(`/api/users/sign-up`, params, {
        withCredentials: true,
      });
      if (response.status === 201) {
        console.log(response);
      } else {
        new Error('error');
      }
    } catch (error: any) {
      console.error('error');
    }
  }, []);

  const signIn = useCallback(async (params: ISignInUser) => {
    try {
      const response = await Api.post(`/api/users/sign-in`, {
        ...params,
      });
      if (response.status === 200) {
        // createAuth(response.data.id);
        await router.push('/dashboard');
      } else {
        new Error('error');
      }
    } catch (error: any) {
      console.error('error');
    }
  }, []);

  return {
    signUp,
    signIn,
  };
};

export default useUser;
