// function tarea(done){
//     console.log('mi primer tarea');
//     done();
// }

// exports.tarea = tarea;
const {src, dest, watch, parallel} = require('gulp');


// CSS
const sass=require('gulp-sass')(require('sass'));
const plumber=require('gulp-plumber');
const autoprefixer=require('autoprefixer');
const cssnano=require('cssnano');
const postcss=require('gulp-postcss');
const sourcemaps=require('gulp-sourcemaps');

function css(done){
    // src('src/scss/app.scss')//identificar el archivo SASS
    // para que escucche todos
    src('src/scss/**/*.scss')//de forma recursiva busca todos los archivos dentro de la carpeta scss
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe( sass() )//complilarlo
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))//se le pone punto para que sea la misma ubicacion de la hoja de stilo css
        .pipe( dest('build/css') );//almacenar en el disco


    done();//callback q avisa a gulp q llegamos al final
}
//imagenes
const cache= require('gulp-cache');
const imagemin=require('gulp-imagemin');
const webp=require('gulp-webp');
const avif=require('gulp-avif');


function imagenes( done){
    const opciones={
        optimizatinLevel: 3
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( cache(imagemin(opciones)))
        .pipe(dest('build/img'));
    done();
}
function versionWebp( done){
    const opciones={
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( webp(opciones))
        .pipe(dest('build/img'));
    done();
}

function versionAvif( done){
    const opciones={
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( avif(opciones))
        .pipe(dest('build/img'));
    done();
}
function javascript( done ){
    src('src/js/**/*.js')
    .pipe(dest('build/js'));

    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    done();
}

exports.css=css;
exports.js=javascript;
exports.imagenes=imagenes;
exports.versionWebp=versionWebp;
exports.versionAvif=versionAvif;
exports.dev=parallel( imagenes, versionWebp, versionAvif, javascript, dev);