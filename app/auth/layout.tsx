import React, { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <nav>
        <ul>
          <li>음</li>
          <li>음</li>
          <li>음</li>
          <li>음</li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
