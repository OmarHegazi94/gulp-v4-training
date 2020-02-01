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
const htmlmin = require('gulp-htmlmin');


// Project structure must match in development and in production

// Assets

    // => CSS

    // => JS

    // => Fonts

    // => Img



// Compile all Less files into the same folder then add prefixes to them
// Then Concat and minify all of these files into the dist folder

// Compile LESS to CSS + Adding css prefixes

gulp.task('compile-less', function() {

    const plugins = [
        // uncss({
        //     html: ['*.html']
        // }),
        autoprefixer({ overrideBrowserslist: ['last 2 versions'] }),
    ];

    return gulp.src('./assets/css/*.less')
    .pipe( less({
        paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(uncss({
        html: ['*.html']
    }))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./assets/css/'));
});

// Minify + Concat all css
gulp.task('minify-css',  function() {
    return gulp.src('./assets/css/*.css')
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
gulp.task('concat-js', function() {
    return gulp.src('./assets/js/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    // .pipe(rename(''))
    .pipe(gulp.dest('./dist/assets/js/'));
});

// Minify and Copy all html files
gulp.task('minify-html', function() {
    return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/'));
});



// Minify all images 
gulp.task('minify-images', function() {
    return gulp.src(['./assets/img/*+(.png|.jpg)'])
    .pipe(imgmin())
    .pipe(gulp.dest('./dist/assets/img'));
});

// Copy all icons into the new img folder
// gulp.task('copy-icons', function() {
//     return gulp.src('./img/icons/*')
//     .pipe(gulp.dest('./dist/assets/img/icons'));
// });


// Another way of writing the task
const copyIcons = async () => { 
    return gulp.src('./assets/img/icons/*')
    .pipe(gulp.dest('./dist/assets/img/icons'));
};



// See how to Minify fonts
// See how to make a local dev server and watch for changes


// Build Command
gulp.task('build', gulp.parallel(gulp.series('compile-less', 'minify-css', 'concat-js' ,'minify-html'),'minify-images', copyIcons ));



module.exports = { copyIcons };
