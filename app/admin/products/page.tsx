import useProduct from '@/app/hooks/useProduct';
import dynamic from 'next/dynamic';
import React from 'react';


const Page = async () => {
  const { findAll } = useProduct();
  const products = await findAll();

  // kendo issue
  const KendoGrid = dynamic(
    () => import('@/app/components/organism/kendoGrid'),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    },
  );

  return (
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
  );
};

export default Page;
