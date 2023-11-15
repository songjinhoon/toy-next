import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  href: string;
  text: string;
};

const LinkBox: FC<Props> = ({ href, text }) => {
  return (
    <div className="w-full">
      <Link className="float-right" href={href}>
        {text}
      </Link>
    </div>
  );
};

export default LinkBox;
