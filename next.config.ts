import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for custom domain
  // basePath: process.env.NODE_ENV === 'production' ? '/passion' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/passion/' : '',
};

export default nextConfig;
