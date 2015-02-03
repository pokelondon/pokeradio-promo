/* global module:false */
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-requirejs');

    grunt.initConfig({

        watch: {
            less: {
                files: [
                    'src/pokeradiopromo/css/less/*.less',
                    'src/pokeradiopromo/css/less/modules/*.less',
                    'src/pokeradiopromo/less/vendor/*.less'
                ],
                tasks: ['less']
            },
            css: {
                files: ["src/pokeradiopromo/css/*.css"],
                options: {
                    livereload: true,
                }
            },
            html: {
                files: ["src/pokeradiopromo/*.html"],
                options: {
                    livereload: true,
                }

            },
            js: {
                files: [
                    'src/pokeradiopromo/js/app.js',
                    'src/pokeradiopromo/js/app/*.js',
                    'src/pokeradiopromo/js/libs/*.js'
                ],
                tasks: ['requirejs']
            }
        },

        less: {
            compile: {
                options: {
                    paths: ["src/pokeradiopromo/css/less/"]
                },
                files: {
                    "src/pokeradiopromo/css/screen.css": "src/pokeradiopromo/css/less/screen.less"
                }
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: 'src/pokeradiopromo/js',
                    mainConfigFile: 'src/pokeradiopromo/js/app.js',
                    name: 'app',
                    out: 'src/pokeradiopromo/js/app.min.js',
                    preserveLicenseComments: false,
                    optimize: 'uglify',
                    //optimize: 'none',
                    paths: {
                        jquery: "libs/jquery-1.11.1.min",
                        requireLib: "libs/require.min"
                    },
                    include: 'requireLib'
                }
            },
        }

    });

    // default build task
    grunt.registerTask('default', ['less', 'requirejs', 'watch']);
    grunt.registerTask('optimize', 'requirejs');
};
