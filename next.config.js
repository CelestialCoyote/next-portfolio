/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200],
		domains: [
			'epic.gsfc.nasa.gov',
			'images-assets.nasa.gov',
			'apod.nasa.gov',
			'i.annihil.us'
		],
		path: "/_next/image",
		loader: "default"
	},
	webpack(config) {
		config.module.rules.push({
		  test: /\.geojson$/,
		  use: ["json-loader"]
		});
	
		return config;
	  },
	  devIndicators: {
		autoPrerender: false,
	  },
};


module.exports = nextConfig
