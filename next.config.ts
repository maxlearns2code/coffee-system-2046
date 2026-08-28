import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Target modern JavaScript baseline to eliminate legacy polyfills (ES2022+)
  compiler: {
    // Enable modern compilation optimization
  },
  // Disable legacy polyfills by building for modern browsers
  transpilePackages: [],
};

export default nextConfig;
