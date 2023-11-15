import React from 'react';
import Link from 'next/link';

const AdminMenu = () => {
  return (
    <div
      className="lg:w-1/4 w-full p-5 h-full"
      style={{ backgroundColor: '#2e3647' }}
    >
      <nav className="list-none">
        <li className="mb-5">
          <Link
            className="text-gray-600 hover:text-gray-800 text-2xl"
            href={'/'}
          >
            상품관리
          </Link>
        </li>
        <li className="mb-5">
          <Link
            className="text-gray-600 hover:text-gray-800 text-2xl"
            href={'/'}
          >
            Second Link
          </Link>
        </li>
        <li className="mb-5">
          <Link
            className="text-gray-600 hover:text-gray-800 text-2xl"
            href={'/'}
          >
            Third Link
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default AdminMenu;
