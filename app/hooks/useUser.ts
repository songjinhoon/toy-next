import { ISignInUser, ISignUpUser } from '@/app/types/user';
import Api from '@/app/utils/axiosConfig';
import { fetcher } from '@/app/utils';

export const userApi = 'http://localhost:4000/users';

const useUser = () => {
  const signUp = async (params: ISignUpUser) => {
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
  };

  const signIn = async (params: ISignInUser) => {
    return await findById({
      id: '1',
    });
  };

  const findById = async ({ id }: { id: string }) => {
    const response = await fetcher(
      `/api/users/${id}` /*{
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
