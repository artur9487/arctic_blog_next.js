/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	reactStrictMode: false
};

module.exports = {
	env: {
		API: 'https://api-eu-central-1.hygraph.com/v2/cl10szcbx0rd401z04l0ldt9g/master'
	},
	nextConfig,
	images: {
		domains: ['media.graphcms.com'],
		domains: ['media.graphassets.com']
	}
};
