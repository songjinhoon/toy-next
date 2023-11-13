import { useCallback, useEffect } from 'react';
import { ISignUpUser } from '@/app/types/user';
import Api from '@/app/utils/axiosConfig';

const useUser = () => {

  console.log('debug');

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

  return {
    signUp,
  };
};

export default useUser;
