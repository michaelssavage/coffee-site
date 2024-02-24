const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["external-content.duckduckgo.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
