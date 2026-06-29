import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  allowedDevOrigins: ["192.168.1.102", "192.168.1.3", "192.168.1.100", "192.168.*.*", "10.*.*.*"],

  devIndicators: false,

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