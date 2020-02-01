const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

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

// Minify all css


// Compile all ES6 to ES5

// gulp.task('compile-js', async () => {
//     return gulp.src('./style/js/*.js')
//     .pipe(babel({
//         presets: ['@babel/preset-env']
//     }))
//     .pipe(gulp.dest('./dist/assets/js/'));
// });

// Minify all js files
gulp.task('concat-js', async () => {
    return gulp.src('./style/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/assets/js/'));
});


// Rename all css
// Minify all images 
// See how to Minify fonts
// Copy all html files into dist folder
// Minify all html files

// Copy all of these results to new dist folder


// See how to make a local dev server and watch for changes
