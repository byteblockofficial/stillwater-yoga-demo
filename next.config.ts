import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/stillwater-yoga-demo",
  images: { unoptimized: true },
};

export default nextConfig;
