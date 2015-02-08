require.config({
    paths: {
        app: "app",

        jquery: [
            "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
            "libs/jquery-1.11.1.min"
        ],
        "jquery.migrate": "libs/jquery-migrate-1.2.1.min",
        "jquery.debounce": "libs/jquery.ba-throttle-debounce.min",
        underscore: "libs/underscore.min",
        text: "libs/require.text",
        vivus: "libs/vivus.min"
    },

    shim: {
        underscore: {
            exports: "_"
        },
        "jquery.migrate": {
            deps: ["jquery"]
        }
    }
});

require(["jquery",
    "app/LayoutHandler",
    "vivus"],

    function($, LayoutHandler, Vivus) {

        // trim shim
        (function() {
            if (typeof String.prototype.trim !== 'function') {
                String.prototype.trim = function() {
                    return this.replace(/^\s+|\s+$/g, '');
                }
            }
        })();

        (function() {
            $(document).ready(function() {
                var nav_toggle = $('.Nav-burger-menu');
                var nav = $('.Nav');
                nav_toggle.on('click', function (e) {
                    e.preventDefault();
                    nav.toggleClass('is-open');
                });

                $('.menu-link').on('click', function (e) {
                    e.preventDefault();
                    var target = $(this.hash);
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        nav.removeClass('is-open');
                        return false;
                    }
                });

                $(window).on("mobileToDesktop", function() {
                    nav.removeClass('is-open');
                });

                var Vivus = window.Vivus;
                var diagram = new Vivus('HowItWorks-diagram', {type: 'scenario', duration: 200});

            });

        })();
        
    }
);
