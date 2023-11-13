import { FC } from 'react';

type Props = {
  text: string;
};

const PageTileBox: FC<Props> = ({ text }) => {
  return (
    <div>
      <p className={'text-center text-2xl'}>{text}</p>
    </div>
  );
};

export default PageTileBox;
