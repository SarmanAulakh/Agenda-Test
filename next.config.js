/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.jazzhr.com', 'www.cisco.com'],
  },
}

module.exports = nextConfig
