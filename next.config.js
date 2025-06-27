/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: false, // matikan, jadi gak perlu critters
  },
  // analytics: { id: ... }  // HAPUS ini
}

module.exports = nextConfig;
