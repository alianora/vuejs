"use strict";






    (function ($) {
        $(document).ready(function () {
            var breakpoint = $('html').innerWidth();

            var menu = $(".header");
            $(window).scroll(function() {
              var header = $(this).scrollTop();
              if (header >= 105 ) {
                menu.addClass('header-stiky');
                $('.header-top__logo-img').attr('src','../img/icons-png/logo_black.png');
              } else if ( header < 150 ) {
                menu.removeClass('header-stiky');
                $('.header-top__logo-img').attr('src','../img/icons-png/logo_white.png');
              }
            });

            var parallaxIt = function () {

                var $window = $(window);
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;  // для IE 
            
                $window.on('scroll resize', function () {
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                });
            
                $('[data-type="background"]').each(function () {
            
                    var $backgroundObj = $(this);
                    var pos;
                    var coords;
                    var speed = ($backgroundObj.data('speed') || 0);
           
                    $window.on('scroll resize', function () {
            
                        var bgOffset = parseInt($backgroundObj.offset().top);  // координаты по у - позиц. relative
            
                        if ($backgroundObj.attr('data-vector') == 'horizontal') {
                            pos = (scrollTop - bgOffset) / speed;
                            coords = pos + 'px ' + '50%';
                            $backgroundObj.css({ backgroundPosition: "calc(50% " + "- " + pos + "px)" });
                        } else {
                            pos = -((scrollTop - bgOffset) / speed);
                            coords = '50% ' + pos + 'px';
                            $backgroundObj.css({ backgroundPosition: coords });
                        }
            
                    });
            
                });
            
                $window.trigger('scroll');
            }

            //SLIDER
            $('.banner__slider').slick({
                slidesToScroll: 1,
                centerMode: true,
                //  autoplay: true,
                arrows: false,
                dots: false,
                variableWidth: true,

            });

            $('.clients__slider').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
            //    rows:2,
            //    slidesPerRow:4,
            //     //  autoplay: true,
                arrows: false,
                dots: true,

                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 798,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    }
    
                ]
            });



            // mobile-menu

            $('.btn-burger').on('click', function () {

                $('.mobile-menu').slideToggle(300, function () {

                    $('<div class="overlay"></div>').prependTo($('body'));
                    $('body').addClass('hidden');

                    if ($(this).css('display') === 'none') {
                        $('.overlay').remove();
                        $(this).removeAttr('style');
                        $('body').removeAttr('class');

                    }

                    return false;
                });

            });

            $(window).resize(function () {
                if ($(window).width() >= 768) {
                    $('.burger-menu__list').removeAttr("style");
                }
            });





            //	FORMS
            $('.validation__input,.validation__textarea').each(function () {
                filledPlaceholder(this);
            }).on("blur", function () {
                filledPlaceholder(this);
            });

            $('select').select2({
                minimumResultsForSearch: -1
            });


            $(".phone-mask").mask("+38 (999) 999-9999");

            $(document).on("click", '.validation__pass-view', function () {
                var input = $(this).prevAll('input');
                $(this).toggleClass('show');
                console.log(input.attr('type'));
                input.attr('type') == 'password' ? input.attr('type', 'text') : input.attr('type', 'password');
            });

          
         
            offTheTarget('.language-switch', function () {
                $('.language-switch').removeClass('open');
            });
            //trick for CSS object-fit fallback
            if (!Modernizr.objectfit) {
                $('.object-fit').each(function () {
                    var $container = $(this),
                        imgUrl = $container.find('img').prop('src');
                    if (imgUrl) {
                        $container
                            .css('backgroundImage', 'url(' + imgUrl + ')')
                            .addClass('compat-object-fit');
                    }
                });
            }
        });


    })(jQuery);

//Listeners


$(document).on("click", ".language-switch", function () {
    $(this).toggleClass('open');
});

//FUNCTIONS
function filledPlaceholder(input) {
    $(input).val() ? $(input).parent().addClass('filled') : $(input).parent().removeClass('filled');
}

function offTheTarget(target, callback) {
    $(document).on("mousedown", function (e) {
        if (!$(target).is(e.target) && $(target).has(e.target).length === 0) {
            callback();
        }
    });
}

function initTabs(tabs, clearOnResize) {
    $(tabs).each(function () {
        var tabContainers = $(this).children('div');
        if (clearOnResize) {
            tabContainers.attr('style', '');
        }
        tabContainers.hide().filter(':first').show();
        $(this).find('.tab-list a').click(function () {
            tabContainers.hide();
            tabContainers.filter(this.hash).show();
            $('.tab-list a').removeClass('active');
            activeTab($(this));
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });


}
