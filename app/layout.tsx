import type { Metadata } from 'next';
import './globals.css';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="text-gray-400 bg-gray-900 body-font relative h-screen">
        {children}
      </body>
    </html>
  );
}
