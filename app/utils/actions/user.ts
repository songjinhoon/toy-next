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
  await fetcher(userApi + '111', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  revalidateTag('users');
}

export async function createUserError(data: any) {
  try {
    const response = await fetch(userApi + 'wwwww', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      await Promise.reject('g');
    }
  } catch (e) {
    return { message: 'Failed to create' };
  }
}
