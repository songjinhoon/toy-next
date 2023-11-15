import React, { FC } from 'react';

type Props = {
  type: 'submit' | 'button';
  text: string;
};

const CommonButton: FC<Props> = ({ type, text }) => {
  return (
    <button
      className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      type={type}
    >
      {text}
    </button>
  );
};

export default CommonButton;
