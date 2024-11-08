/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    reactCompiler: true,
    // Remove or comment out the ppr feature
    // ppr: 'incremental'
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com", "images.pexels.com"],
  },
};

export default nextConfig;