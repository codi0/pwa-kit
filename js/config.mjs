//export config
export default {

	//general
	debug: true,
	splashDelay: 1000,

	//service worker pre-cache
	swPreCache: [
		'./',
		'./img/icons/icon-48x48.png',
		'./img/icons/icon-144x144.png'
	],

	//service worker cache policies
	swCachePolicies: {
		'https://cdn.jsdelivr.net': 'cors'
	}

};