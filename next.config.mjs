/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "metadata.nftscan.com",
      protocol: "https"
    }]
  }
};

export default nextConfig;
