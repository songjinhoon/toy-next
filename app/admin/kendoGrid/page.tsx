import CommonTitle from '@/app/components/atom/text/commonTitle';
import { findAllProducts } from '@/app/utils/actions/product';
import React from 'react';
import KendoGrid from '@/app/components/organism/kendoGrid';
import dynamic from 'next/dynamic';

const Page = async () => {
  const products = await findAllProducts(); // 100건?

  const KendoGrid = dynamic(
    () => import('@/app/components/organism/kendoGrid'),
    {
      ssr: false,
      loading: () => <p>KENDO LOADING.........</p>,
    },
  );

  return (
    <>
      <CommonTitle title={'Kendo Grid Sample'}></CommonTitle>
      <KendoGrid
        datas={products}
        options={{
          columns: [
            {
              key: 'id',
              value: 'id',
              width: '40px',
            },
            {
              key: 'ProductName',
              value: 'product name',
              width: '250px',
            },
            {
              key: 'UnitPrice',
              value: 'unit price',
            },
            {
              key: 'Category.CategoryName',
              value: 'category name',
            },
          ],
        }}
      ></KendoGrid>
    </>
  );
};

export default Page;
