import React, { ReactNode } from 'react';
import CommonHeader from '@/app/components/organism/commonHeader';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <CommonHeader></CommonHeader>
      <div>{children}</div>
    </section>
  );
}
