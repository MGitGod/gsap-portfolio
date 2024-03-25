/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
            },
        ]
    },
    transpilePackages: ['three'],
};

export default nextConfig;
