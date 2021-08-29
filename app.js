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



// Scroll top function
const scrollBtn = document.querySelector('#scrollBtn');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if(window.innerWidth > 800) {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    scrollBtn.style.display = "block";
	  } else {
	    scrollBtn.style.display = "none";
	  }
	}
}

function topFunction() {
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
}