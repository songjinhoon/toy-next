import KendoGrid from '@/app/components/organism/kendoGrid';
import products from '@/app/admin/product/products.json';

/* SSR GOGO */
const AdminProductPage = () => {
  return <KendoGrid datas={products}></KendoGrid>;
};

export default AdminProductPage;

/*
export const getServerSideProps = async (context: any) => {
  const result = await request(
    'https://backend03.codebootcamp.co.kr/graphql12',
    FETCH_USEDITEM,
    {
      useditemId: context.query.ProductsDetailPage,
    },
  );
  console.log('123');
  // 2. 요청받은 데이터를 페이지로 넘겨준다.
  return {
    props: {
      fetchUseditem: result.fetchUseditem,
    },
  };
};
*/
