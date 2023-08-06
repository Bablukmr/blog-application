/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['plus.unsplash.com','images.unsplash.com','images.pexels.com',"drive.google.com"],
      },
      eslint:{
        ignoreDuringBuilds:true
      },
}

module.exports = nextConfig
