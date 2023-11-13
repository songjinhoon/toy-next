import React, { FC } from 'react';

type Props = {
  type: 'submit' | 'button';
  text: string;
};

const CommonButton: FC<Props> = ({ type, text }) => {
  return (
    <button className={'bg-sky-500'} type={type}>
      {text}
    </button>
  );
};

export default CommonButton;
