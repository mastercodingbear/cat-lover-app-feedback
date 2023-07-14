/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cats',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['cdn2.thecatapi.com', 'cdn1.theimageapi.com', '26.media.tumblr.com']
  }
}

module.exports = nextConfig
