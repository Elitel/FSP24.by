$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});

// ===== Scroll to Top ==== 
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
    $('.return-to-top').fadeIn(200); // Fade in the arrow
  } else {
    $('.return-to-top').fadeOut(200); // Else fade out the arrow
  }
});
$('.return-to-top').click(function () { // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0 // Scroll to top of body
  }, 800);
});

$(document).ready(function()
{
  if ($('.navbar').offset().top>50)
  {
    $('.navbar').addClass('transparent');
  }
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.navbar').addClass('transparent');
    } else {
      $('.navbar').removeClass('transparent');
    }
  });
});


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$('body').on('click', '.card-body', function() {
  $(this).closest('.card').toggleClass("active");
});