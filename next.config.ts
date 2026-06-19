import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.wemark.pro",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
