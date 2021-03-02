/**
 *  Popup slider plugin v0.1, 17.05.2018
 *
 *  init example
 *  $('.search').PopupSlider({
        effect: 'top',                  - (type string). left || top || right || fade
        button: '.search-trigger',      - (type string). required option
        closeButton: '.search-close',   - (type string). if false, plugin will render default button
        container: '.header',           - (type string). container selector for back-layer
        breakpoint: 992,                - (type number). init popup only on this breakpoint
        onMenuOpen: false,              - (function(){console.log('menu open')}). call custom function on menu-open
        onMenuClose: false              - (function(){console.log('menu close')}). call custom function on menu-close
    });
 */

(function ($) {
    $.fn.PopupSlider = function (options) {
        options = $.extend({
            effect: 'left',
            buttonToggle: false,
            button: false,
            closeButton: false,
            container: 'body',
            breakpoint: false,
            lockScroll: true,
            onMenuOpen: false,
            onMenuClose: false
        }, options);

        //check device
        var userAgent = window.navigator.userAgent.toLowerCase(),
            ios = /iphone|ipod|ipad/.test(userAgent);
        var iosClass = ios ? ' popup-slider-ios ' : '';

        //check touch device
        var supportsTouch = ('ontouchstart' in document.documentElement);

        //generate ID
        function iD() {
            return '_' + Math.random().toString(36).substr(2, 4);
        }

        var layerId = 'layer' + iD();

        //render components
        addBackLayer(options.container, layerId);
        addCloseButton();

        //init selectors
        var __this = $(this),
            button = $(options.button),
            closeButton = $(options.closeButton) ? $(options.closeButton) : document.querySelectorAll('.close-popup')[0],
            backLayer = $(options.container).find('>.back-layer').length ? $(options.container).find('>.back-layer') : $('#' + layerId),
            selectors;

        if (options.buttonToggle) {
            selectors = $(__this).add(button).add(backLayer);
        } else {
            selectors = $(__this).add(button).add(closeButton).add(backLayer);
        }

        if (!options.button) {
            console.error($(__this).attr("class") + ' ==> Set BUTTON selector as ".button"')
        }

        //responsive options
        options.breakpoint ? breakpoint() : ($(__this).addClass('popup-slider menu-' + options.effect + iosClass) && popupTrigger());

        $(window).on("resize", function () {
            if (options.breakpoint) {
                $(document).off("click touchend", options.button);
                breakpoint();
            }
        });

        //close-button actions
        $(closeButton).add(backLayer).on("click", function () {
            menuClose();
        });

        //functions
        function checkScrollBars() {
            var body = $('body');
            var normalw = 0;
            var scrollw = 0;
            if (body.prop('scrollHeight') > body.height()) {
                normalw = window.innerWidth;
                scrollw = normalw - body.width();
                $(body).css({'margin-right': scrollw + 'px', 'overflow': 'hidden'});
            }
        }

        function breakpoint() {
            if ($('html').width() < options.breakpoint) {
                $(__this).addClass('popup-slider menu-' + options.effect + iosClass);
                popupTrigger();
            } else {
                menuClose();
                $(__this).removeClass('popup-slider menu-' + options.effect + iosClass);
            }
        }

        function addBackLayer(container, uniqueId) {
            var layer = document.createElement('div');
            layer.className = 'back-layer';

            if (!$(container).find('>.back-layer').length) {
                $(layer).prependTo(container);
                layer.id = uniqueId;
            }
        }

        function addCloseButton() {
            var checkCloseButton = $(options.container).find('>.close-popup').length;
            if (!checkCloseButton && !options.closeButton && !options.buttonToggle) {
                var element = document.createElement('div');
                element.className = 'close-popup';
                $(element).prependTo(options.container);
            }
        }

        function menuOpen() {
            $(selectors).addClass('menu-open');
            if (options.lockScroll) {
                checkScrollBars();
            }
            if (options.onMenuOpen) {
                options.onMenuOpen();
            }
        }

        function menuClose() {
            $(selectors).removeClass('menu-open');
            if (options.lockScroll) {
                $('body').css({'overflow': 'auto', 'margin-right': 0});
            }
            if (options.onMenuClose) {
                options.onMenuClose();
            }
        }

        function popupTrigger() {
            $(document).off("click touchend", options.button);
            $(document).on("click touchend", options.button, function (e) {
                if (ios && (e.type) == 'touchend') {
                    e.stopPropagation();
                    e.preventDefault();
                    !$(this).hasClass('menu-open') ? menuOpen() : menuClose();
                } else if ((e.type) == 'click') {
                    e.stopPropagation();
                    e.preventDefault();
                    !$(this).hasClass('menu-open') ? menuOpen() : menuClose();
                }
            });
        }
    };
})(jQuery);
