'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const ArrowButton = () => {
  const router = useRouter();
  const _onClick = useCallback(() => {
    localStorage.removeItem('id');
    router.push('/auth/signIn');
  }, [router]);

  return (
    <button
      className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
      onClick={_onClick}
    >
      Logout
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  );
};

export default ArrowButton;
