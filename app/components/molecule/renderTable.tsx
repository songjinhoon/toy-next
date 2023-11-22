import React, { FC } from 'react';
import CommonTableHeader from '@/app/components/atom/table/commonTableHeader';
import dynamic from 'next/dynamic';
import CommonLoading from '@/app/components/atom/loading/commonLoading';

interface Props {
  datas: any;
}

const RenderTable: FC<Props> = ({ datas }) => {
  const LoadingComponent = dynamic(
    () => import('@/app/components/atom/table/commonTableBody'),
    {
      ssr: false,
      loading: () => <CommonLoading />,
    },
  );

  console.log(datas[0]);
  return (
    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
      <CommonTableHeader></CommonTableHeader>
      {/*<CommonTableBody datas={datas}></CommonTableBody>*/}
      <LoadingComponent datas={datas}></LoadingComponent>
{/*      <Suspense fallback={<CommonLoading />}>
        <CommonTableBody datas={datas}></CommonTableBody>
      </Suspense>*/}
    </table>
  );
};

export default RenderTable;
