//imports
import config from './config.mjs';

//DOM vars
var root = document.querySelector('#root');
var splash = document.querySelector('#splash');

//populate app
setTimeout(function() {

	//hide splash
	splash.classList.add('none');

	//set title
	document.title = 'Example PWA';
	
	//do stuff here...
	root.innerHTML = '<div class="middle">Hello World!</div>';

}, config.splashDelay - performance.now());