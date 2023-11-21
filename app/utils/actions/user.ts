'use server';

import { fetcher } from '@/app/utils';
import { revalidateTag } from 'next/cache';

const userApi = 'http://localhost:4000/users';

export async function findAllUser() {
  return await fetcher(userApi, {
    next: { tags: ['users'] },
  });
}

export async function createUser(data: any) {
  await fetcher(userApi, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  revalidateTag('users');
}
