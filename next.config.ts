import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/showcase",
  assetPrefix: "/showcase/",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
