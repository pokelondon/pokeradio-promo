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
    },

    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["underscore", "jquery"]
        },
        owl: {
            deps: ["jquery"]
        },
        "jquery.migrate": {
            deps: ["jquery"]
        }
    }
});

require(["jquery",
    "app/LayoutHandler",
    "jquery.migrate"],

    function($, LayoutHandler) {

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

            });
        });
        
    }
);
