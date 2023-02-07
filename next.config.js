/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['diamond-eu-prod.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
