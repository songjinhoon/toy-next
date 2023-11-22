import { Product } from '@/app/types/db';
import ProductForm from '@/app/components/molecule/productForm';
import useProduct, { productApi } from '@/app/hooks/useProduct';
import { fetcher } from '@/app/utils';

interface Params {
  params: {
    id: string;
  };
}

const Page = async ({ params }: Params) => {
  const { findById } = useProduct();
  const data = await findById(Number(params.id));
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '30px 10px',
        height: '100%',
      }}
    >
      <ProductForm data={data}></ProductForm>
    </div>
  );
};

export async function generateStaticParams() {
  const products: Product[] = await fetcher(productApi);
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default Page;
