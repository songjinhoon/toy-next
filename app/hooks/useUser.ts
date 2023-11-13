import { useCallback } from 'react';
import { ISignInUser, ISignUpUser } from '@/app/types/user';
import Api from '@/app/utils/axiosConfig';

const useUser = () => {
  const signUp = useCallback(async (params: ISignUpUser) => {
    console.log('debug2');
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

  const signIn = useCallback(async (params: ISignInUser) => {}, []);

  return {
    signUp,
    signIn,
  };
};

export default useUser;
