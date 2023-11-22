import { FC } from 'react';

interface Props {
  title: string;
}

const CommonTitle: FC<Props> = ({ title }) => {
  return <h1 className="text-3xl text-center m-5">{title}</h1>;
};

export default CommonTitle;
