/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:
                    "mrityuanjaya-nextjs-demo-users-image.s3.ap-south-1.amazonaws.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
