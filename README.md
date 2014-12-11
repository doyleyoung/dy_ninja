This is the source to doyleyoung.ninja.

Build with grunt, configured actions in default:

    grunt ['jshint','shell','uglify','cssmin']

'clean' and 'compress' are also available.

Grunt replaces (uglify instead of minify):

    handlebars templates/ -f js/templates.js
    minify js/vendor/jquery.js js/foundation.min.js js/vendor/handlebars.runtime-v2.0.0.js js/templates.js js/app.js > minify/all.js
    minify css/normalize.css css/foundation.css css/app.css > minify/all.css
