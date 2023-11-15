import { useCallback } from 'react';
import { ISignInUser, ISignUpUser } from '@/app/types/user';
import Api from '@/app/utils/axiosConfig';
import { fetcher } from '@/app/utils';

const useUser = () => {
  /*  const {
    data: user,
    mutate: userMutate,
    isLoading,
  } = useSWR<IUser | boolean>(`http://localhost:4000/users/${id}`, fetcher, {
    dedupingInterval: 60000, // 60초동안은 캐쉬에서 호출하겠다.
  });*/

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

  const signIn = async (params: ISignInUser) => {
    return await findById({
      id: '1',
    });
  };

  const findById = async ({ id }: { id: string }) => {
    const response = await fetcher(
      `http://localhost:4000/users/${id}` /*{
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }*/,
    );
    localStorage.setItem('id', id);
    return response;
  };

  return {
    signUp,
    signIn,
    findById,
  };
};

export default useUser;
