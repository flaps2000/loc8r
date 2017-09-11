var gulp = require('gulp');

//var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify'); 

gulp.task('default', function(){
  // Default task code
  console.log('GULP GULP GULP')
});

//script paths
var jsFiles = ['app_client/common/**/*.js', 'app_client/home/**/*.js', 'app_client/*.js'],  
    jsDest = 'public/angular';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('loc8rConcat.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('loc8r.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});
