/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'st.kp.yandex.net',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
