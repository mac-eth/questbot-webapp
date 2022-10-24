/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.discordapp.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
