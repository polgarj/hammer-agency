import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Suppress console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Cache control
  async headers() {
    return [
      {
        source: "/(.*)", // Match all routes
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600, stale-while-revalidate=59",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
