'use server';

import { fetcher } from '@/app/utils';
import { productApi } from '@/app/hooks/useProduct';

const userApi = 'http://localhost:4000/products';

export async function findAllProducts() {
  return await fetcher(productApi, {
    next: { tags: ['products'] },
  });
}
