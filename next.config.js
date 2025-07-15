// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'alwaqaspaint.com' }],
        destination: 'https://www.alwaqaspaint.com/:path*',
        permanent: true,
      },
    ];
  },
}; 