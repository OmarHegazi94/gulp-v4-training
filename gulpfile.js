const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');



// Assets

    // => CSS

    // => JS

    // => Fonts

    // => Img



// Compile LESS to CSS
gulp.task('compile-less', async () => {
    return gulp.src('./style/css/*.less')
    .pipe( less({
        paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('dist/assets/css'));
});



// Compile all ES6 to ES5
// Minify all css
// Rename all css
// Minify all images 
// See how to Minify fonts


// Copy all of these results to new dist folder


// See how to make a local dev server and watch for changes
