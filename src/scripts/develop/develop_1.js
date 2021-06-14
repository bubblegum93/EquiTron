function burger() {
    var menu = $('.nav-list');
    $('.burger').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('acitve');
  
      if ($('.burger').hasClass('active')) {
        menu.slideUp('fast');
        $(this).removeClass('active');
      } else {
        menu.slideDown('fast');
        $(this).addClass('active');
      }
    });
  
    $(window).resize(function () {
      var menu = $('.nav-list');
      var w = $(window).width();
      if (w >= 600) {
        menu.removeAttr('style');
        $('.burger').removeClass('active');
      }
    });
  };

function showTabs(evt) {
    var target = evt.target.closest('[data-part]');
    if (!target) return;

    var parts = document.querySelectorAll('.part');

    if (target) {
        var dataPart = target.dataset.part;

        for(let part of parts) {
            part.classList.remove('active');
            if( part.classList.contains(dataPart) ) {
                part.classList.add('active');
            }
        }
    }
}

function scrollTabs(evt) {
  var target = evt.target.closest('[data-part]');
    if (!target) return;

    var parts = document.querySelectorAll('.part');

    if (target) {
        var dataPart = target.dataset.part;

        for(let part of parts) {
          let w = $(window).width();
            if( part.classList.contains(dataPart) &&  w <=864 ) {
              var target = $(part).offset().top;
              $('body,html').animate({scrollTop:target},500);
            }
        }
    }
}

function scrollAnimHorse() {
  var ellipseNumber = document.querySelectorAll('.ellipse__number');

    for (let number of ellipseNumber) {
      number.addEventListener('click', function(evt) {
        let w = $(window).width();
        if (w <= 960) {
          evt.preventDefault();
          var href = $(this).attr('href');
          var target = $(href).offset().top-100;
          $('body,html').animate({scrollTop:target},500);
        }
    })
  }
}

function slider() {
  $('.slider-wrapp').slick({
    slidesToShow: 1,
    arrows: false,
    infinite: false
  });
  $('.arrow-left').on('click', function(e) {
    $('.slider-wrapp').slick('slickPrev');
  });
  $('.arrow-right').on('click', function(e) {
    $('.slider-wrapp').slick('slickNext');
  });
}

$(document).ready(function(){
    document.addEventListener('click', function(evt) {
        showTabs(evt);
        scrollTabs(evt)
    })

    burger();
    scrollAnimHorse()
    slider();
});

$(window).load(function(){

});

$(window).resize(function(){
});