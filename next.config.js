/** @type {import('next').NextConfig} */
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://booup.github.io/TellMe_front"
      : "",
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
