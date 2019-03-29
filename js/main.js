var popup = document.querySelector('.site-list');
var popupOpen = document.querySelector('.main-nav__toggle');
var popupClose = document.querySelector('.main-nav__close');
var windowWidth = document.body.clientWidth;
if ( windowWidth < 1200 ) {
	popup.classList.add('visually-hidden');
}

var openPopup = function() {
	popupOpen.classList.add('main-nav__toggle--hidden');
	popupClose.classList.remove('main-nav__close--hidden');
	popup.classList.remove('visually-hidden');

	document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
	popupClose.classList.add('main-nav__close--hidden');
	popupOpen.classList.remove('main-nav__toggle--hidden');
	popup.classList.add('visually-hidden');
	document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function(evt) {
	if (evt.keyCode === ESC_KEYCODE) {
		closePopup();
	}
};

popupOpen.addEventListener('click', function (evt) {
	evt.preventDefault();
	openPopup();
});

popupOpen.addEventListener('keydown', function (evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
})

popupClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	closePopup();
});

popupClose.addEventListener('keydown', function (evt) {
	if(evt.keyCode === ENTER_KEYCODE){
		closePopup();
	}
});

/* Кнопка "Наверх" */
function trackScroll() {
	var scrolled = window.pageYOffset;
	var coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
		goTopBtn.classList.add('back_to_top-show');
	}
	if (scrolled < coords) {
		goTopBtn.classList.remove('back_to_top-show');
	}
}
var minHeight = coords * (-1);

function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, minHeight);
		setTimeout(backToTop, 0);
	}
}

var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);