window.onscroll = function () {
	let scrollToTopButton = document.getElementById('scrollToTop');
	if (
		document.body.scrollTop > 350 ||
		document.documentElement.scrollTop > 350
	) {
		scrollToTopButton.style.display = 'block';
	} else {
		scrollToTopButton.style.display = 'none';
	}
};

document.getElementById('scrollToTop').addEventListener('click', function () {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});
