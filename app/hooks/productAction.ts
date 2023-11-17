'use server';

import { revalidateTag } from 'next/cache';

export async function productAction() {
  revalidateTag('product');
  revalidateTag('products');
}
