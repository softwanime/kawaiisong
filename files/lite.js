var IE = document.all ? true : false

if (!IE) document.getElementById("flashContainer").style.pointerEvents = 'none';

function getFlashMovie(movieName) {
	return (IE) ? window[movieName] : document[movieName];
}

function f_filterResults(n_win, n_docel, n_body) {
	var n_result = n_win ? n_win : 0;
	if (n_docel && (!n_result || (n_result > n_docel)))
		n_result = n_docel;
	return n_body && (!n_result) ? n_body : n_result;
}
function f_clientWidth() {
	return f_filterResults (
		window.innerWidth ? window.innerWidth : 0,
		document.documentElement ? document.documentElement.clientWidth : 0,
		document.body ? document.body.clientWidth : 0
	);
}
function f_clientHeight() {
	return f_filterResults (
		window.innerHeight ? window.innerHeight : 0,
		document.documentElement ? document.documentElement.clientHeight : 0,
		document.body ? document.body.clientHeight : 0
	);
}

function resize_fitAll() {
	getFlashMovie("FlashExternalInterface").width = f_clientWidth();
	getFlashMovie("FlashExternalInterface").height = f_clientHeight();
}

resize_fitAll();
window.onresize = resize_fitAll;