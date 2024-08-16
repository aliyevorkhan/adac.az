/*------------------------------------------------------------------
* Project:        Ecoviron - Ecology & Enviroment Charity HTML Templates
* Author:         HtmlDesign Templates
* URL:            https://themeforest.net/user/htmldesigntemplates/portfolio
* Created:        07/19/2024
-------------------------------------------------------------------*/

/* 

Table of content
1.SlickNav responsive
2.Slick Slider for partner section
3.Counter 
4.Light Gallery For Video
5.Light Gallery For Gallery section
6.Slick Slider for volunteer section
7.Progress bar percentage animation
8.slider for testimonnial
9.Back-to-top 
10.Countdown for Coming soon page

*/


/* SlickNav responsive */

(function($) {
  "use strict";


  // Custom-mav js//
  $(window).on('scroll', function(event) {
      var scrollValue = $(window).scrollTop();
      if (scrollValue > 100) {
          $('.header-nav-menu').addClass('fixed-top animated slideInDown');
      } else {
          $('.header-nav-menu').removeClass('fixed-top animated slideInDown');
      }
  });



  "use strict";


  /*======== Doucument Ready Function =========*/
  jQuery(document).ready(function() {

      // slicknav
      /**
       * Slicknav - a Mobile Menu
       */
      var $slicknav_label;
      $('#responsive-menu').slicknav({
          duration: 500,
          easingOpen: 'easeInExpo',
          easingClose: 'easeOutExpo',
          closedSymbol: '<i class="arrow-indicator fa fa-angle-down"></i>',
          openedSymbol: '<i class="arrow-indicator fa fa-angle-up"></i>',
          prependTo: '#slicknav-mobile',
          allowParentLinks: true,
          label: ""
      });


      /**
       * Sticky Header
       */

      $(window).scroll(function() {

          if ($(window).scrollTop() > 10) {

              $('.header-nav-menu-inner').addClass('navbar-sticky-in')

          } else {
              $('.header-nav-menu-inner').removeClass('navbar-sticky-in')
          }

      })

      /**
       * Main Menu Slide Down Effect
       */

      var selected = $('#navbar li');
      // Mouse-enter dropdown
      selected.on("mouseenter", function() {
          $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
      });

      // Mouse-leave dropdown
      selected.on("mouseleave", function() {
          $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
      });

      /**
       *  Arrow for Menu has sub-menu
       */
      if ($(window).width() > 992) {
          $(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
      }

  });


  (function() {

      var doc = document.documentElement;
      var w = window;

      /*
      define four variables: curScroll, prevScroll, curDirection, prevDirection
      */

      var curScroll;
      var prevScroll = w.scrollY || doc.scrollTop;
      var curDirection = 0;
      var prevDirection = 0;

      /*
      how it works:
      -------------
      create a scroll event listener
      create function to check scroll position on each scroll event,
      compare curScroll and prevScroll values to find the scroll direction
      scroll up - 1, scroll down - 2, initial - 0
      then set the direction value to curDirection
      compare curDirection and prevDirection
      if it is different, call a function to show or hide the header
      example:
      step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
      step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
      step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
      */

      var header = document.getElementById('header-nav-menu');
      var toggled;
      var threshold = 200;

      var checkScroll = function() {
          curScroll = w.scrollY || doc.scrollTop;
          if (curScroll > prevScroll) {
              // scrolled down
              curDirection = 2;
          } else {
              //scrolled up
              curDirection = 1;
          }

          if (curDirection !== prevDirection) {
              toggled = toggleHeader();
          }

          prevScroll = curScroll;
          if (toggled) {
              prevDirection = curDirection;
          }
      };

      var toggleHeader = function() {
          toggled = true;
          if (curDirection === 2 && curScroll > threshold) {
              header.classList.add('hide');
              jQuery('.sticky1').addClass('tab-sticky');
          } else if (curDirection === 1) {
              header.classList.remove('hide');
              jQuery('.sticky1').removeClass('tab-sticky');
          } else {
              toggled = false;
          }
          return toggled;
      };

      window.addEventListener('scroll', checkScroll);

  })();

  /* SlickNav responsive End*/


  /* Slick slider for partner section Start*/
  $('.partner-slide').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      arrows: false,
      dots: false,
      responsive: [{
              breakpoint: 990,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });

  /* Slick slider for partner section End*/


  /* Counter JS Start*/
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 1000;

  valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function() {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
              clearInterval(counter);
          }
      }, duration);
  });
  /* Counter JS End*/

  /* Light Gallery for Video Start */
  lightGallery(document.getElementById('lightgallery-video'), {
      plugins: [lgVideo],
      speed: 500,
      videoMaxWidth: '1000px',
  });
  /* Light Gallery end */



  /* Light Gallery For Gallery section Start */
  lightGallery(document.getElementById('lightgallery'), {
      plugins: [lgThumbnail, lgFullscreen],
      speed: 500,
      videoMaxWidth: '1000px',
  });
  /* Light Gallery For Gallery section End */


  /* Slick slider for volunteer section Start*/
  $('.volunteer-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      arrows: false,
      dots: false,
      responsive: [{
              breakpoint: 990,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });

  /* Slick slider for volunteer section End*/


  /* Counter for progress bar start */
  let valueDisplayss = document.querySelectorAll(".progress-num");
  let intervall = 3000;

  valueDisplayss.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(intervall / endValue);
      let counter = setInterval(function() {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
              clearInterval(counter);
          }
      }, duration);
  });

  /* Counter for progress bar start */

  /* slider for testimonnial start */
  $('.testimonial-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows: false,
      dots: false,
      responsive: [{
              breakpoint: 990,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
  /* Cslider for testimonnial end */

  /* Back-to-top js Start */
  $(document).on('click', '#back-to-top, .back-to-top', () => {
      $('html, body').animate({
          scrollTop: 0
      }, '500');
      return false;
  });
  $(window).on('scroll', () => {
      if ($(window).scrollTop() > 500) {
          $('#back-to-top').fadeIn(200);
      } else {
          $('#back-to-top').fadeOut(200);
      }
  });
  /* Back-to-top js end */

  /* Countdown for Coming soon page Start */
  document.addEventListener('DOMContentLoaded', function() {
      const days = document.getElementById('days');
      const hours = document.getElementById('hours');
      const minutes = document.getElementById('minutes');
      const seconds = document.getElementById('seconds');

      // Check if all elements are found
      const elementsExist = days && hours && minutes && seconds;

      // If any element is missing, log a warning and return
      if (!elementsExist) {
          console.warn('One or more countdown elements not found.');
          return;
      }

      // Get current date and time
      const currentTime = new Date();

      // Set new date 30 days from now
      const targetTime = new Date(currentTime.getTime() + (100 * 24 * 60 * 60 * 1000));

      // Update countdown time
      function updateCountdown() {
          const currentTime = new Date();
          const diff = targetTime - currentTime;

          const d = Math.floor(diff / 1000 / 60 / 60 / 24);
          const h = Math.floor((diff / 1000 / 60 / 60) % 24);
          const m = Math.floor((diff / 1000 / 60) % 60);
          const s = Math.floor((diff / 1000) % 60);

          // Update elements if they exist
          if (days) days.innerHTML = d;
          if (hours) hours.innerHTML = h < 10 ? '0' + h : h;
          if (minutes) minutes.innerHTML = m < 10 ? '0' + m : m;
          if (seconds) seconds.innerHTML = s < 10 ? '0' + s : s;
      }

      // Call updateCountdown initially and set it to run every second
      updateCountdown();
      setInterval(updateCountdown, 1000);
  });
  /* Countdown for Coming soon page End */

  /*Slick Slider for product single page*/

  $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 0,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [{
          breakpoint: 600,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1
          }
      }]
  });

})(jQuery);