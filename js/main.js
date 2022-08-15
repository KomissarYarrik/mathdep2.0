// --- menu scroll ---

const header = document.querySelector('.header');
const first = document.querySelector('.welcome');
const headerHeight = header.offsetHeight;
const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
    if (scrollDistance > lastScrollTop) {
		header.classList.remove('header--fixed');
		first.style.marginTop = null;
	} else {
		header.classList.add('header--fixed');
		
	}

	if (scrollDistance === 0) {
		header.classList.remove('header--fixed');
		first.style.marginTop = null;
	}

	lastScrollTop = scrollDistance;
});


// --- mobile menu ---

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active')
        $('body').toggleClass('lock');
        $('.header').toggleClass('header--mob-menu');
    });

    // If a link has a dropdown, add sub menu toggle.
    $('.header__link:not(:only-child)').click(function (e) {
        $(this).siblings('.header__dropdown').slideToggle("slow");

        // Close dropdown when select another dropdown
        $('.header__dropdown').not($(this).siblings()).slideUp("slow");
        e.stopPropagation();
    });

    // Click outside the dropdown will remove the dropdown class
    $('html').click(function () {
        $('.header__dropdown').slideUp("slow");
    });
});


// --- swiper ---

var swiper = new Swiper(".welcome-swiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
