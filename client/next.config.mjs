/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co', // Replace with your domain(s)
                pathname: '/**', // Match all paths
            },
        ],
    },
};

export default nextConfig;
