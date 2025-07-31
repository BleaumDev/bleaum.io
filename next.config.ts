import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "img.freepik.com/**",
//       },
//     ],
//   },
//   // if used turbopack
//   // transpilePackages: ["next-mdx-remote"],
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only add basePath if your site should be served from a subdirectory
  // basePath: '/your-subdirectory',
  trailingSlash: false,
  // output: 'export', // Removed to enable API routes
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com/**",
      },
    ],
    unoptimized: true, // Disable Image Optimization for static export
  },
}

module.exports = nextConfig