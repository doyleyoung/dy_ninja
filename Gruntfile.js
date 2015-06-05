module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'js/app.js']
        },
        clean: {
            all: {
                src: ['js/templates.js', 'minify/all.min.js', 'minify/all.min.css', '../dy_ninja.tar.gz'],
                options: {
                    force: true
                }
            }
        },
        // tried multiple handlebars plugins, couldn't get them to wrap in an immediate
        // function like command line executable
        shell: {
            options: {
                stderr: false
            },
            target: {
                command: '/usr/local/bin/handlebars templates/ -f js/templates.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */',
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: {
                    'minify/all.min.js': ['js/vendor/jquery.js',
                        'js/foundation.min.js',
                        'js/vendor/handlebars.runtime-v3.0.3.js',
                        'js/templates.js',
                        'js/app.js']
                }
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                files: {
                    'minify/all.min.css': ['css/normalize.css',
                        'css/foundation.css',
                        'css/app.css']
                }
            }
        },
        compress: {
            main: {
                options: {
                    archive: '../dy_ninja.tar.gz'
                },
                files: [
                    {src: ['humans.txt', 'index.html', 'robots.txt'], dest: 'dy_ninja/'},
                    {src: ['examples/*'], dest: 'dy_ninja/'},
                    {src: ['img/*'], dest: 'dy_ninja/'},
                    {src: ['js/vendor/modernizr.js'], dest: 'dy_ninja/'},
                    {src: ['minify/*'], dest: 'dy_ninja/'}
                ]
            }
        }
    })
    ;

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'shell', 'uglify', 'cssmin']);
}
;
