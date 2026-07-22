import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Map the "@/..." import alias to the project root. Set here explicitly so it
    // does not depend on Next parsing tsconfig `paths` at build time.
    config.resolve.alias["@"] = __dirname;
    return config;
  },
};

export default nextConfig;
