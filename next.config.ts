import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {},
    devIndicators: false,
    poweredByHeader: false,
    serverExternalPackages: ["firebase-admin"],
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "lh3.googleusercontent.com" },
            { protocol: "https", hostname: "avatars.githubusercontent.com" },
            { protocol: "https", hostname: "utfs.io" },
        ],
    },
};

export default nextConfig;
