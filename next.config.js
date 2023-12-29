const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
  // Optionally, add any other Next.js config below
  images: {
    domains: [
      "s19533.pcdn.co",
      "www.streetmachine.com.au",
      "www.litchfieldmotors.com",
    ],
  },
};

module.exports = withMDX(nextConfig);
