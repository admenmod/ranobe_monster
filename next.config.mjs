import withPWA from '@ducanh2912/next-pwa';

// /** @type {import('next').NextConfig} */

export default withPWA({
	dest: 'public',
	swcMinify: true,
	aggressiveFrontEndNavCaching: true,
	cacheOnFrontEndNav: true,
	reloadOnOnline: true,
	fallbacks: {
		document: '/~offline'
	},
	disable: process.env.NODE_ENV === 'development'
})({
	output: 'standalone',
	reactStrictMode: false,
	typescript: {
		ignoreBuildErrors: true
	}
});
