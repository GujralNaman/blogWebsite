// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images:{
//     domains:["lh3.googleusercontent.com","firebasestorage.googleapis.com"]
//   }
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  webpack(config, { isServer }) {
    // Enable tree-shaking and code splitting
    config.optimization.splitChunks = {
      chunks: "all",
    };

    // Add other webpack configurations here if needed

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
