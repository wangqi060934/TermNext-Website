/** @type {import('next').NextConfig} */
const nextConfig = {
	// Only enable static export for production builds
	...(process.env.NODE_ENV === 'production' && { output: 'export' }),
	trailingSlash: true, // Generate /zh/index.html instead of /zh.html
	images: {
		unoptimized: true, // Disable image optimization for static export
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'termnext.com',
			},
		],
	},
};

export default nextConfig;
