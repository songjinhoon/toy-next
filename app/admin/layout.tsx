import React, { ReactNode } from 'react';
import AdminMenu from '@/app/components/organism/adminMenu';
import CommonHeader from '@/app/components/organism/commonHeader';

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
        <div style={{ flex: '4' }}>{children}</div>
      </div>
    </section>
  );
}
