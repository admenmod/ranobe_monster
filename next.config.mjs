import withPWA from '@ducanh2912/next-pwa';

// /** @type {import('next').NextConfig} */

export default withPWA({
	dest: 'public',
	// register: true,
	// skipWaiting: true,
	swcMinify: true,
	aggressiveFrontEndNavCaching: true,
	cacheOnFrontEndNav: true,
	reloadOnOnline: true,
	fallbacks: {
		document: '/~offline'
	},
	disable: process.env.NODE_ENV === 'development'
})({
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true
	}
});
