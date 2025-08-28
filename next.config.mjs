/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
