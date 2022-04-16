/** @type {import('next').NextConfig} */
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/TellMe_front" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/TellMe_front/" : "",
  async rewrites() {
    return [
      {
        source: "/api",
        destination: API_URL,
      },
    ];
  },
};

module.exports = nextConfig;
