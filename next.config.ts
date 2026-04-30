import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ecosystem",
  assetPrefix: "/ecosystem/",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
