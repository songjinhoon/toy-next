import { fetcher } from '@/app/utils';
import { Product } from '@/app/types/db';
import { productAction } from '@/app/hooks/productAction';

export const productApi = 'http://localhost:4000/products';

const UseProduct = () => {
  const findAll = async () => {
    return await fetcher(productApi, {
      next: { tags: ['products'] },
    });
  };

  const findById = async (id: number) => {
    return await fetcher(`${productApi}/${id}`, {
      next: { tags: ['product'] },
    });
  };

  const update = async (data: Product) => {
    const response = await fetcher(`${productApi}/${data.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
      }),
    });
    await productAction();
    return response;
  };

  return {
    findAll,
    findById,
    update,
  };
};

export default UseProduct;
