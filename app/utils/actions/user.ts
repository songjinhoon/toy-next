'use server';

import { fetcher } from '@/app/utils';

const userApi = 'http://localhost:4000/users';

export async function findAllUser() {
  return await fetcher(userApi, {
    next: { tags: ['users'] },
  });
}

export async function createUser(data: any) {
  try {
    await fetch(userApi + '1112222222', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    return { message: 'Failed to create' };
  }
  /*await fetcher(userApi + '111', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  revalidateTag('users');*/
}
