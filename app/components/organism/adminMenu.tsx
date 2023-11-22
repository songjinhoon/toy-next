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
            href={'/admin/kendoGrid'}
          >
            kendoGrid
          </Link>
        </li>
        <li className="mb-5">
          <Link
            className="text-gray-600 hover:text-gray-800 text-2xl"
            href={'/admin/serverAction'}
          >
            serverAction
          </Link>
        </li>
        <li className="mb-5">
          <Link
            className="text-gray-600 hover:text-gray-800 text-2xl"
            href={'/admin/serverActionError'}
          >
            serverActionError
          </Link>
        </li>
        <li className="mb-5">
          <Link
            className="text-gray-600 hover:text-gray-800 text-2xl"
            href={'/admin/bigData'}
          >
            bigData
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default AdminMenu;
