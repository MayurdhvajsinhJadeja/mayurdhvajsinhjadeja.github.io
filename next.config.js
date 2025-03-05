/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",

 // Add basePath
  // basePath: '/github-pages',
  images: {
    domains: ['https://api.iconify.design/skill-icons'],
  }

}

module.exports = nextConfig