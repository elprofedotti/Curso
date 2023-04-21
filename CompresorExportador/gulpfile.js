const { src, dest, watch, series, parallel } = require('gulp');
const imagemin = require('gulp-imagemin'); // Minificar imagenes 
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const webp = require('gulp-webp');

const paths = {
    imagenes: 'src/img/**/*'
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Imagen Completada' }));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Imagen Completada' }));
}


function watchArchivos() {
    //watch(paths.imagenes, imagenes);
    watch(paths.imagenes, versionWebp);
}

exports.watchArchivos = watchArchivos;
//exports.default = parallel(imagenes, versionWebp, watchArchivos); 
exports.default = parallel(versionWebp, watchArchivos); 
