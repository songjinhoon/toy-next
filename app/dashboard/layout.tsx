import React, { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <nav>
        <ul>
          <li>호</li>
          <li>호</li>
          <li>호</li>
          <li>호</li>
          <li>호</li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
