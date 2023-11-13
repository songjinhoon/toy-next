import { useCallback } from 'react';
import { ISignInUser, ISignUpUser } from '@/app/types/user';
import Api from '@/app/utils/axiosConfig';
import { useRouter } from 'next/navigation';
import { fetcher } from '@/app/utils';
import { ApiContext } from "@/app/types/db";

export type FindUserParam = {
  id: number;
};

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

  const signIn = async (context: ApiContext, params: ISignInUser) => {
    const response = await fetcher(
      `${context.apiRootUrl.replace(/\/$/g, '')}/auth/sign-in`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      },
    );
    return response;
  };

  const findUser = async (context: ApiContext, { id }: FindUserParam) => {
    const response = await fetcher(
      `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  };

  return {
    signUp,
    signIn,
  };
};

export default useUser;
