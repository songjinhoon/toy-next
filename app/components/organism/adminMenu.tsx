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
            href={'/admin/products'}
          >
            products
          </Link>
        </li>
        <li className="mb-5">
          <Link
            className="text-gray-600 hover:text-gray-800 text-2xl"
            href={'/admin/users'}
          >
            users
          </Link>
        </li>
        <li className="mb-5">
          <Link
            className="text-gray-600 hover:text-gray-800 text-2xl"
            href={'/admin/errors'}
          >
            error-test
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default AdminMenu;
