(function ($) {
  //Start spinner function 
  function onReady(callback) {
    var intervalId = window.setInterval(function () {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }

  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }

  onReady(function () {
    setVisible('.page', true);
    setVisible('#loading', false);
  });

  //end spinner function 
  $(document).ready(function () {
    //add class active to nav-item on click
    $('li a').on('click', function () {
      $('li a.active').removeClass("active");
    });
    $('.navbar-nav').on('click', 'li a', function () {
      $('.navbar-nav li a.active').removeClass('active');
      $(this).addClass('active');
    });
    $('ul').on('click', 'li', function () {
      $('ul li.active').removeClass('active');
      $(this).addClass('active');
    });
    $('.navbar-toggler').click(function () {
      $(this).toggleClass("active")
    });
    //slider-banner-hero
    $('.slider-banner-hero').owlCarousel({
      margin: 0,
      dots: true,
      nav: true,
      loop: true,
      autoplay: false,
      autoplayTimeout: 4000,
      navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="41.079" height="70.302" viewBox="0 0 41.079 70.302"> <path id="Path_9569" data-name="Path 9569" d="M-90.268,15.223c4.346,4,8.521,7.854,12.7,11.7q9.606,8.825,19.219,17.642c1.814,1.666,2.076,3.4.759,4.828s-3.052,1.312-4.882-.368q-16.813-15.439-33.615-30.89c-2.362-2.173-2.34-3.7.054-5.9Q-79.294-3.147-62.551-18.521c1.1-1.014,2.324-1.849,3.762-1.136.8.4,1.809,1.428,1.8,2.167A4.96,4.96,0,0,1-58.32-14.2C-67.91-5.265-77.593,3.571-87.25,12.433-88.189,13.294-89.121,14.162-90.268,15.223Z" transform="translate(97.841 19.923)" fill="#fff"/> </svg>',
                '<svg xmlns="http://www.w3.org/2000/svg" width="41.079" height="70.302" viewBox="0 0 41.079 70.302"><path id="Path_9571" data-name="Path 9571" d="M-90.268,15.223c4.346,4,8.521,7.854,12.7,11.7q9.606,8.825,19.219,17.642c1.814,1.666,2.076,3.4.759,4.828s-3.052,1.312-4.882-.368q-16.813-15.439-33.615-30.89c-2.362-2.173-2.34-3.7.054-5.9Q-79.294-3.147-62.551-18.521c1.1-1.014,2.324-1.849,3.762-1.136.8.4,1.809,1.428,1.8,2.167A4.96,4.96,0,0,1-58.32-14.2C-67.91-5.265-77.593,3.571-87.25,12.433-88.189,13.294-89.121,14.162-90.268,15.223Z" transform="translate(-56.761 50.379) rotate(180)" fill="#fff"/></svg>'],
                responsive: {
                  0: {
                      items: 1,
                      nav: false,
                  },
                  600: {
                    items: 1,
                    nav: true,
                }
              }
    });
  });
})(jQuery);
