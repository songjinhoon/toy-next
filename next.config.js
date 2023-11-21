/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/:path*',
      },
    ];
  },
  trailingSlash: true,
};

module.exports = nextConfig;

/*
 * 1. SSR은 프록시가 안먹나?
 * */
