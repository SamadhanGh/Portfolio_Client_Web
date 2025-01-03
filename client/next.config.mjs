/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Move this to the root of the configuration
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

module.exports = nextConfig;
