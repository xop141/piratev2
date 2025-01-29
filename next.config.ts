import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    TMDB_BASE_URL: process.env.TMDB_BASE_URL || "",
    TMDB_IMAGE_SERVICE_URL: process.env.TMDB_IMAGE_SERVICE || "",
    TMDB_API_TOKEN: process.env.TMDB_API_TOKEN || "",
  },
  images: {
    domains: ['image.tmdb.org'], 
  },
};

export default nextConfig;
