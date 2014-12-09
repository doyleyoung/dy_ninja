module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'js/app.js']
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
          'minify/all.min.js':
            ['js/vendor/jquery.js',
            'js/foundation.min.js',
            'js/vendor/handlebars.runtime-v2.0.0.js',
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
          'minify/all.min.css':
            ['css/normalize.css',
            'css/foundation.css',
            'css/app.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['jshint','shell','uglify','cssmin']);
};
