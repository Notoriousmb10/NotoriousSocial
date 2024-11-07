/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    // Remove or comment out the ppr feature
    // ppr: 'incremental'
  },
};

export default nextConfig;