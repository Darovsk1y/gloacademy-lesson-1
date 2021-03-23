const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

let cartButton = document.querySelector('.button-cart');
let modalCart = document.querySelector('#modal-cart');
let modalClose = document.querySelector('.modal-close');

function openModal() {
	modalCart.classList.add('show');
}
function closeModal() {
	modalCart.classList.remove('show');
}

cartButton.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

(function () {

	let scrollLinks = document.querySelectorAll('a.scroll-link');
	for (let i = 0; i < scrollLinks.length; i++) {
		scrollLinks[i].addEventListener('click', function(e){
			e.preventDefault();
			const id = this.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	}
}) ()