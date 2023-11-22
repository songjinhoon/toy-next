import dumy from './dumy.json';
import CommonTitle from '@/app/components/atom/text/commonTitle';
import RenderTable from '@/app/components/molecule/renderTable';

const Page = async () => {
  const datas: any = dumy;

  return (
    <>
      <CommonTitle title={'30000 Data Render Test'}></CommonTitle>
      <RenderTable datas={datas.slice(0, 100)}></RenderTable>
    </>
  );
};

export default Page;
