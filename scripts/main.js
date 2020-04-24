var open = false;
var modelOpen = false;

$(document).ready(function () {
	openMap();
	history.pushState(null, null, window.location.href.split('#')[0]);
});

window.onscroll = function () {
	scrollFunction()
};

$(window).resize(function () {
	if ($(window).width() > 630) {
		closeMenu();
	}
});

$(document).mouseup(function (e) {
	var container = $(document.getElementById("modalBox"));
	if (modelOpen && !container.is(e.target) && container.has(e.target).length === 0) {
		window.location.href = '#close';
		modelOpen = !modelOpen;
	}
});

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("navbar").classList.add("scrollnav");
		document.getElementById("navbar-border").style.opacity = "0";
	} else {
		document.getElementById("navbar").classList.remove("scrollnav");
		document.getElementById("navbar-border").style.opacity = "1";
	}
}

function showMenu() {
	if (open) {
		document.body.style.overflow = "scroll";

		document.getElementById("hamburger").classList.add("fa-bar");
		document.getElementById("hamburger").classList.remove("fa-times");

		document.getElementById("menu").style.display = "none";
	} else {
		document.body.style.overflow = "hidden";

		document.getElementById("hamburger").classList.remove("fa-bar");
		document.getElementById("hamburger").classList.add("fa-times");

		document.getElementById("menu").style.display = "flex";

		document.getElementById("navbar").classList.add("scrollnav");
	}
	open = !open;
}

function closeMenu() {
	if (open) {
		document.body.style.overflow = "scroll";

		document.getElementById("hamburger").classList.add("fa-bar");
		document.getElementById("hamburger").classList.remove("fa-times");

		document.getElementById("menu").style.display = "none";
		open = !open;
	}
}

function openModal() {
	if (modelOpen) {
		window.location.href = '#close';
	} else {
		window.location.href = '#openModal';
	}
	modelOpen = !modelOpen;
}

function openMap() {
	document.getElementById("sketch").style.display = 'none';
	document.getElementById("map").style.display = 'block';
} 

function hideMap() {
	document.getElementById("map").style.display = 'none';
	document.getElementById("sketch").style.display = 'block';
}
