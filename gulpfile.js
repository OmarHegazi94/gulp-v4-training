const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleancss = require('gulp-clean-css');
const autoprefixer = require('autoprefixer');

const postcss = require('gulp-postcss');
const uncss = require('gulp-uncss');

const imgmin = require('gulp-imagemin');

// Assets

    // => CSS

    // => JS

    // => Fonts

    // => Img



// Compile all Less files into the same folder then add prefixes to them
// Then Concat and minify all of these files into the dist folder

// Compile LESS to CSS + Adding css prefixes

gulp.task('compile-less', async () => {

    const plugins = [
        // uncss({
        //     html: ['*.html']
        // }),
        autoprefixer({ overrideBrowserslist: ['last 2 versions'] }),
    ];

    return gulp.src('./style/css/*.less')
    .pipe( less({
        paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(uncss({
        html: ['*.html']
    }))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./style/css/'));
});

// Minify + Concat all css
gulp.task('minify-css', async () => {
    return gulp.src('./style/css/*.css')
    .pipe(cleancss({ compatibility: 'ie8' }))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./dist/assets/css'));
});




// Compile all ES6 to ES5

// gulp.task('compile-js', async () => {
//     return gulp.src('./style/js/*.js')
//     .pipe(babel({
//         presets: ['@babel/preset-env']
//     }))
//     .pipe(gulp.dest('./dist/assets/js/'));
// });

// Concat + Minify all js files
gulp.task('concat-js', async () => {
    return gulp.src('./style/js/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    // .pipe(rename(''))
    .pipe(gulp.dest('./dist/assets/js/'));
});



// Minify all images 
gulp.task('minify-images', async () => {
    return gulp.src(['./img/*+(.png|.jpg)'])
    .pipe(imgmin())
    .pipe(gulp.dest('./dist/assets/img'));
});

// Copy all icons into the new img folder
gulp.task('copy-icons', async () => {
    return gulp.src('./img/icons/*')
    .pipe(gulp.dest('./dist/assets/img/icons'));
});



// See how to Minify fonts
// Copy all html files into dist folder
// Minify all html files



// See how to make a local dev server and watch for changes
