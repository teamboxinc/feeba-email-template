const gulp = require('gulp');
const inlineCss = require('gulp-inline-css');

gulp.task('default', function() {
    return gulp.src('./src/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('dist/'));
});
