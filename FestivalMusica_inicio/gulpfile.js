// function tarea(done){
//     console.log('mi primer tarea');
//     done();
// }

// exports.tarea = tarea;
const {src, dest, watch, parallel} = require('gulp');
const sass=require('gulp-sass')(require('sass'));
const plumber=require('gulp-plumber');

// CSS
function css(done){
    
    
    // src('src/scss/app.scss')//identificar el archivo SASS
    // para que escucche todos
    src('src/scss/**/*.scss')//de forma recursiva busca todos los archivos dentro de la carpeta scss
        .pipe(plumber())
        .pipe( sass() )//complilarlo
        .pipe( dest('build/css') );//almacenar en el disco


    done();//callback q avisa a gulp q llegamos al final
}
//imagenes
const imagemin=require('gulp-imagemin');
const webp=require('gulp-webp');
function imagenes( done){
    src('src/img/**/*.{png,jpg}')
        .pipe(
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

function dev(done){
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css=css;
exports.versionWebp=versionWebp;
exports.dev=parallel( versionWebp, dev);