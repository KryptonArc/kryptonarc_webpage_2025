/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.kickstarter.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/kryptonarc_webpage_2025' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kryptonarc_webpage_2025/' : '',
}

module.exports = nextConfig
