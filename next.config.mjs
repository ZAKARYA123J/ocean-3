/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/Index',
        destination: '/Home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
