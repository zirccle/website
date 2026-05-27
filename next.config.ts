import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  allowedDevOrigins: ["192.168.1.3"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;