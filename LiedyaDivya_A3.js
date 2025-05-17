//NAVIGATION
// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}
                                
//HERO SLIDE
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');
let current = 0;
let autoSlide = true;
let slideInterval = setInterval(nextSlide, 5000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

function resetInterval() {
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }
}

document.querySelector('.hero-slider').addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});
document.querySelector('.hero-slider').addEventListener('mouseleave', () => {
  if (autoSlide) slideInterval = setInterval(nextSlide, 5000);
});

//SEARCH BAR
const eligiblePostcodes = ['3936', '3931', '3926', '3930', '3926', '3934', '3916', '3944', '3942', '3937', '3939', '3937', '3939', '3939', '3940', '3936', '3941', '3939', '3936', '3929', '3916', '3927', '3938', '3943', '3928', '3941', '3916', '3941', '3926', '3933'];
const form = document.getElementById('eligibilityForm');
const input = document.getElementById('postcodeInput');
const message = document.getElementById('eligibilityMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const userInput = input.value.trim();
  if (eligiblePostcodes.includes(userInput)) {
    message.style.color = '#27ae60';
    message.textContent = 'Great news! Your area is eligible for our services.';
  } else {
    message.style.color = '#e74c3c';
    message.textContent = 'Sorry, your area is not eligible for our services.';
  }
});
