import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Se o repo NÃO for phaos93.github.io (user site), descomente a linha abaixo
  // e substitua "portfolio" pelo nome do repo:
  // basePath: "/portfolio",
};

export default nextConfig;
