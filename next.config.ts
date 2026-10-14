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
  async redirects() {
    return [
      { source: '/operations/automated-compilance', destination: '/operations/automated-compliance', permanent: true },
      { source: '/company/support', destination: '/support', permanent: true },
      { source: '/blog/bleaum-pay', destination: '/blog', permanent: true },
      { source: '/resources/state-laws', destination: '/resources/sops', permanent: true },
    ]
  },
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