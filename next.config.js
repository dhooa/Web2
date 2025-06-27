/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: false, // atau true kalau sudah install critters
  },
}

module.exports = nextConfig;
