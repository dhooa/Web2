/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false
  },
  experimental: {
    optimizeCss: true,
  },
  analytics: {
    id: process.env.VERCEL_ANALYTICS_ID,
  }
}

module.exports = nextConfig
