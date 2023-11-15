import { fetcher } from '@/app/utils';

const UseProduct = () => {
  const findAll = async () => {
    return await fetcher(`http://localhost:4000/products`);
  };

  return {
    findAll,
  };
};

export default UseProduct;
