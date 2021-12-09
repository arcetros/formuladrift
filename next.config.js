module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/championship/drivers-team',
        destination: '/championship/drivers-team/pro',
        permanent: false,
      },
    ]
  },
}
