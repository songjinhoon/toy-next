import React, { ReactNode, Suspense } from 'react';
import AdminMenu from '@/app/components/organism/adminMenu';
import CommonHeader from '@/app/components/organism/commonHeader';
import Loading from '@/app/admin/loading';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
    >
      <div style={{ height: '10vh' }}>
        <CommonHeader></CommonHeader>
      </div>
      <div style={{ height: '90vh', display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <AdminMenu></AdminMenu>
        </div>
        <Suspense fallback={<Loading />}>
          <div style={{ flex: '4' }}>{children}</div>
        </Suspense>
      </div>
    </section>
  );
}
