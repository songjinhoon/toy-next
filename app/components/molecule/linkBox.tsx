import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  href: string;
  text: string;
};

const LinkBox: FC<Props> = ({ href, text }) => {
  return (
    <div>
      <Link href={href}>{text}</Link>
    </div>
  );
};

export default LinkBox;
