browserify --extension=.coffee -t coffeeify ./src/index.coffee | node_modules/uglify-js/bin/uglifyjs > qadi.js