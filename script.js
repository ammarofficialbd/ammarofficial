// Script File

// Home Section Starts
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends 

// Portfolio Section Starts
var $galleryContainer = $('.gallery').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
	$('.button-group .button').removeClass('active');
	$(this).addClass('active');

	var value = $(this).attr('data-filter');
	$galleryContainer.isotope({
		filter: value
	})
})

// magnific popup
$('.gallery').magnificPopup({
	delegate: '.overlay a',
	type: 'image',
	gallery:{
		enabled: true
	}
})
// Portfolio Section Ends

// Testimonials Section Starts
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        }
    }
})

    // JavaScript for text typing and reversing animation with color object
    const textElement = document.getElementById('text');
    const texts = [
      { text: "Web Designer.", color: "#4ECC50" },
      { text: "Web Developer.", color: "#047d88" },
      { text: "App Developer.", color: "#751878" }
    ];

    let currentIndex = 0;

    function typeAndReverse(index) {
      const { text, color } = texts[currentIndex];

      textElement.textContent = text.slice(0, index);
      textElement.style.color = color;

      if (index < text.length) {
        setTimeout(() => {
          typeAndReverse(index + 1);
        }, 100); // Adjust the typing speed (milliseconds)
      } else {
        // Reverse the animation after typing
        setTimeout(() => {
          reverseText(text.length - 1);
        }, 800); // Adjust the delay before reversing (milliseconds)
      }
    }

    function reverseText(index) {
      const { text, color } = texts[currentIndex];

      textElement.textContent = text.slice(0, index);
      textElement.style.color = color;

      if (index > 0) {
        setTimeout(() => {
          reverseText(index - 1);
        }, 100); // Adjust the reversing speed (milliseconds)
      } else {
        // Move to the next text in the array
        currentIndex = (currentIndex + 1) % texts.length;

        // Start typing the next text
        setTimeout(() => {
          typeAndReverse(0);
        }, 800); // Adjust the delay before typing the next text (milliseconds)
      }
    }

    // Start the typing and reversing animation with the first text
    typeAndReverse(0);