// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true
// }

// module.exports = nextConfig

// module.exports = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'img.icons8.com',
//                 port: ''
//             }
//         ]
//     }
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  }
  
  module.exports = nextConfig
  
  module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }
  
  module.exports = {
    images: {
      domains: ["img.icons8.com", "res.cloudinary.com"],
    },
  }
  