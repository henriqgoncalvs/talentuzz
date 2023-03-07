/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments.topLevelAwait = true;
    return config;
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

module.exports = nextConfig;
