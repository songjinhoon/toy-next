import KendoGrid from '@/app/components/organism/kendoGrid';
import useProduct from '@/app/hooks/useProduct';

/* SSR GOGO */
const AdminProductPage = async () => {
  const { findAll } = useProduct();
  const products = await findAll();

  return <KendoGrid datas={products}></KendoGrid>;
};

export default AdminProductPage;
