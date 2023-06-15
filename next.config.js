/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DEV: process.env.SERVER_URL || "",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https" || "",
        hostname: "reqres.in" || "",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
