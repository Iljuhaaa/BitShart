$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu,.header__list').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.btn-popup,.popup__area').click(function(event){
      $('body').toggleClass('lock');
    });

    function consoleBG() {
        if ($(window).scrollTop() == 0) {
          $('.header').css('background', 'transparent');
        } else {
          $('.header').css('background', 'radial-gradient(circle, rgba(255,136,165,1) 0%, rgba(206,89,128,1) 100%)');
        }
      }
      consoleBG();
      
      $(window).scroll(function() {
        consoleBG();
      });
      
      var $slider = $('.content__slider');

      if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var slider__wrapper = document.createElement('div');
        var newSliderCounter  = document.createElement('div');
        var sliderCounter = document.createElement('div');
        slider__wrapper.classList.add('slider__wrapper');
        sliderCounter.classList.add('slider__counter');
        newSliderCounter.classList.add('new__slider__counter');

        var updateSliderCounter = function(slick, currentIndex) {
          currentSlide = slick.slickCurrentSlide() + 1;
          slidesCount = slick.slideCount;
          
          $(sliderCounter).text('0'+ currentSlide + '/');
          $(newSliderCounter).text('0'+slidesCount);
        };
      
        $slider.on('init', function(event, slick) {
          $slider.append(slider__wrapper);
          $('.slider__wrapper').append(sliderCounter);
          $('.slider__wrapper').append(newSliderCounter);
          updateSliderCounter(slick);
        });
      
        $slider.on('afterChange', function(event, slick, currentSlide) {
          updateSliderCounter(slick, currentSlide);
        });
      
        $slider.slick({
          speed: 500,
          fade: true,
          cssEase: 'linear'
        });
      }


      $('.whywe__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1141,
            settings: {
                centerMode: true,
                slidesToShow: 1,

            }
          }
        
        ]
      });

      $('.forcare__slider').slick({
        variableWidth: true, 
         infinite: false,
         slidesToShow: 1,
         centerMode: false,
        responsive: [
          {
            breakpoint: 1141,
            settings: {
                centerMode: true,
                slidesToShow: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              adaptiveHeight: true
            }
          }
        
        ]
      });

      $('.reccomendations__slider').slick({
        variableWidth: true, 
         infinite: false,
         slidesToShow: 6,
         arrows: false,
        responsive: [
          {
            breakpoint: 1626,
            settings: {
                centerMode: false,
                slidesToShow: 4,
                infinite: true,
            }
          },
        
        ]
      });
      
      $('.experts__slider').slick({
        variableWidth: true, 
         infinite: false,
         slidesToShow: 4,
         arrows: false,
        //  centerMode: true,
        responsive: [
          {
            breakpoint: 1626,
            settings: {
              
                centerMode: false,
                slidesToShow: 2,
                infinite: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
                infinite: true,
                slidesToShow: 1,
            }
          },
        
        ]
      });


      $('.questions__title').click(function(event){
        if($('.questions__wrapper').hasClass('one')){
          $('.questions__title').not($(this)).removeClass('active');
          $('.questions__text').not($(this).next()).slideUp('active');
        }
        $(this).toggleClass('active').next().slideToggle(300);
      });
            

      ymaps.ready(init);
      function init(){
          // Создание карты.
          var myMap = new ymaps.Map("map", {
              // Координаты центра карты.
              // Порядок по умолчанию: «широта, долгота».
              // Чтобы не определять координаты центра карты вручную,
              // воспользуйтесь инструментом Определение координат.
              center: [55.520033, 37.367203],
              // Уровень масштабирования. Допустимые значения:
              // от 0 (весь мир) до 19.
              zoom: 18, 
              controls: []
              
          });

          myMap.geoObjects
          .add(new ymaps.Placemark([55.520033, 37.367203], {
            
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
      }


      const phoneInputField = document.querySelector("#phone");
        const phoneInput = window.intlTelInput(phoneInputField, {
          initialCountry: "Ru",
          geoIpLookup: getIp,
          utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
         });

        function getIp(callback) {
          fetch('https://ipinfo.io/json?token=<your token>', { headers: { 'Accept': 'application/json' }})
            .then((resp) => resp.json())
            .catch(() => {
              return {
                country: 'RU',
              };
            })
            .then((resp) => callback(resp.country));
         }



});