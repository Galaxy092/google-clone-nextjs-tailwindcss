/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:["upload.wikimedia.org", "lh3.googleusercontent.com", "avatars.githubusercontent.com", "github.githubassets.com"]
  }
}

module.exports = nextConfig
