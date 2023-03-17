/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn01.x-plarium.com",
        port: "",
        pathname: "/browser/**",
      },
    ],
  },
};

module.exports = nextConfig;
