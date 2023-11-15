import React, { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto pb-0">
        <div>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              DEMO PROJECT
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
