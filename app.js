var navlinks = document.querySelector('.nav-links');
function showNav() {
	if(window.innerWidth < 800) {
		navlinks.style.width = '80%'
	}
}

function closeNav() {
	if(window.innerWidth < 800) {
		navlinks.style.width = '0%'
	}
}