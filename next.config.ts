import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for Render Static Site (no server-side rendering)
  output: "export",
  // Emit /path/index.html so every route works on any static host
  trailingSlash: true,
  images: {
    // next/image optimization requires a server; serve images as-is
    unoptimized: true,
  },
};

export default nextConfig;
