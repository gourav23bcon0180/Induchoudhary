/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.youtube.com', 'via.placeholder.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
