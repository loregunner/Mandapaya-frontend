/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  react: { useSuspense: false },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    URL_LOGIN: process.env.URL_LOGIN,
  },
};
module.exports = nextConfig;
