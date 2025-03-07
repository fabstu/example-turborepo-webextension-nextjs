import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

async function headers() {
	return [
		// https://github.com/nextauthjs/next-auth/issues/2408
		{
			// Force disable caching for any NextAuth api routes. We need to do this because by default
			// these API endpoints do not return a Cache-Control header. If the header is missing, FrontDoor
			// CDN **will** cache the pages, which is a security risk and can return the wrong user:
			// https://docs.microsoft.com/en-us/azure/frontdoor/front-door-caching#cache-expiration
			source: '/api/auth/:slug',
			headers: [
				{
					key: 'Cache-Control',
					value: 'no-store, max-age=0',
				},
			],
		},
	]
}

const nextConfig = { headers };

export default withNextIntl(nextConfig);