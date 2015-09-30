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
                var diagram = new Vivus('HowItWorks-diagram', {type: 'scenario-sync', duration: 20});
            });

            //retrieve currently playing info
            var name = '';
            var artist = '';
            var image_url = 'img/track.jpg';

            $.getJSON(
                'http://pokerad.io/api/v2/playlist/'
            )
            .done(function(json) {
                var track = json[0];
                if (track.played == true && json.length > 1) {
                    for (var i = 1 ; i < json.length ; i++) {
                        track = json[i];
                        if (track.played == false) break;
                    }
                }
                name = track.name;
                artist = track.artist;
                var album_id = track.album_href.split(":")[2];
                image_url = getAlbumImage(album_id);

            })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            });

            var getAlbumImage = function (album_id) {
                $.getJSON(
                    'https://api.spotify.com/v1/albums/' + album_id
                )
                .done(function(json) {
                    for (var i = 0 ; i < json.images.length ; i++) {
                        var image = json.images[i];
                        if (image.width > 140) {
                            image_url =  image.url;
                            break;
                        }
                    }
                    populateTrack(name, artist, image_url);
                })
                .fail(function(jqxhr, textStatus, error) {
                    var err = textStatus + ", " + error;
                    console.log( "Albumn Request Failed: " + err );
                });
            }

            var populateTrack = function (name, artist, image_url) {
                console.log(name);
                var image_el = $('.track-image');
                var name_el = $('.track-title');
                var artist_el = $('.track-artist');
                image_el.attr("src", image_url);
                name_el.text(name);
                artist_el.text(artist);
            }
        })();

    }
);
