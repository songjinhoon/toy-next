import React from 'react';
import ArrowButton from '@/app/components/atom/button/arrowButton';
import UserInfo from '@/app/components/atom/container/userInfo';
import Link from 'next/link';

const CommonHeader = () => {
  return (
    <header
      className="text-gray-400 bg-gray-900 body-font h-full"
      style={{ backgroundColor: '#6366f1' }}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">DemoProject</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/test'} className="mr-5 hover:text-white">
            Test
          </Link>
          <Link href={'/admin/kendoGrid'} className="mr-5 hover:text-white">
            Admin
          </Link>
        </nav>
        <UserInfo></UserInfo>
        <ArrowButton></ArrowButton>
      </div>
    </header>
  );
};

export default CommonHeader;
