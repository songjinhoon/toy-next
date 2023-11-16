import { fetcher } from '@/app/utils';
import { Product } from '@/app/types/db';

export const productApi = 'http://localhost:4000/products';

const UseProduct = () => {
  const findAll = async () => {
    return await fetcher(productApi);
  };

  const findById = async (id: number) => {
    return await fetcher(`${productApi}/${id}`);
  };

  const update = async (data: Product) => {
    return await fetcher(`${productApi}/${data.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Product_ame: data.ProductName,
        SupplierID: data.SupplierID,
        CategoryID: data.CategoryID,
        QuantityPerUnit: data.QuantityPerUnit,
      }),
    });
  };

  return {
    findAll,
    findById,
    update,
  };
};

export default UseProduct;
