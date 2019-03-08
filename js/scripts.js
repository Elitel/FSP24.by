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


$(document).ready(function () {
  contsize();
});
$(window).bind("resize", function () {
  contsize();
});

function contsize() {
  $('.figcaption').each(function () {
    var width = $(this).prev().width();
    $(this).css('width', width);
    var height = $(this).parent().height() - parseInt($('.services h3').css("font-size")) - parseInt($(this).css("padding-top")) - parseInt($(this).css("line-height")) * 1.5;
    $(this).css('top', height);
  })
};

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  $('.figcaption').click(function () {
    var clicks = $(this).data('clicks');
    if (clicks) {
      var height = $(this).parent().height() - $(this).height() - parseInt($(this).css("padding-bottom"));
      $(this).css('top', height);
    } else {
      var height = $(this).parent().height() - parseInt($('.services h3').css("font-size")) - parseInt($(this).css("padding-top")) - parseInt($(this).css("line-height")) * 1.5;
      $(this).css('top', height);
    }
    $(this).data("clicks", !clicks);
  });
} else {
  $('.figcaption').hover(function () {
      var height = $(this).parent().height() - $(this).height() - parseInt($(this).css("padding-bottom"));
      $(this).css('top', height);
    },
    function () {
      var height = $(this).parent().height() - parseInt($('.services h3').css("font-size")) - parseInt($(this).css("padding-top")) - parseInt($(this).css("line-height")) * 1.5;
      $(this).css('top', height);
    });
};

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
})
