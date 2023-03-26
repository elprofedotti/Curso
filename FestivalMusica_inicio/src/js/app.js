// console.log('hola');
document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    menuInicio();
    navegacionFija();
    crearGaleria();
    scrollNav();
    cambiaTamaño();
}
function cambiaTamaño() {
    // const menu = document.querySelector('.contenido--header');
    let nav=document.querySelector('.navegacion-principal-mq');
            
    window.addEventListener('resize', function() {
        if(window.innerWidth>767){
            if (nav){
                console.log('estoy con menu mq');
            }else{
                nav=document.querySelector('.navegacion-principal');
                console.log('Tengo que mostrar menu MQ');
                nav.innerHTML=`
                <a href="#lineup">Line Up</a>
                <a href="#galeria">Galeria</a>
                <a href="#boletos">Boletos</a>
                
                `;
                nav.classList.remove('navegacion-principal');
                nav.classList.add('navegacion-principal-mq');

                scrollNav();
            }
            
        }else{
            if (nav){
                console.log('tengo que mostrar el menu para celu');
                const elemH2 = document.createElement('H2');
                nav.innerHTML="";
                elemH2.textContent="=";
                elemH2.onclick=function(){
                    const menu=document.querySelector('.overlay-menu');
                    if(menu){
                        menu.remove();
                    }else{
                        mostrarMenu();
                    }
                    
                }
                elemH2.classList.add('mostrarMenuModal');
                nav.appendChild(elemH2);
                nav.classList.remove('navegacion-principal-mq');    
                nav.classList.add('navegacion-principal');
                
            }
        }
        nav=document.querySelector('.navegacion-principal-mq');
    });
}
function menuInicio() {
    const menu = document.querySelector('.contenido--header');
    const nav=document.createElement('NAV');
    if(window.innerWidth>767){
            // console.log('es mayor');
            
            nav.innerHTML=`
            <a href="#lineup">Line Up</a>
            <a href="#galeria">Galeria</a>
            <a href="#boletos">Boletos</a>
            
            `;
            nav.classList.add('navegacion-principal-mq')
    }
    else{
        // console.log('es menor');

        const elemH2 = document.createElement('H2');
        elemH2.textContent="=";
        elemH2.onclick=function(){
            const menu=document.querySelector('.overlay-menu');
            if(menu){
                menu.remove();
            }else{
                mostrarMenu();
            }
            
        }
        elemH2.classList.add('mostrarMenuModal');
        nav.innerHTML="";
        nav.appendChild(elemH2);
        nav.classList.add('navegacion-principal')
    }
    menu.appendChild(nav);
    
}
function mostrarMenu(){
    let nav = document.querySelector('.navegacion-principal-modal');
    if (!nav){
        nav = document.createElement('NAV');
        nav.innerHTML=`
            <a href="#lineup">Line Up</a>
            <a href="#galeria">Galeria</a>
            <a href="#boletos">Boletos</a>
            
        `;
        const p = document.createElement('P');
        p.innerHTML=`
            <p class="modal-btn-cerrar">Cerrar menu <br>(X)</p>
        `;
        p.onclick=function(){
            overlay.remove();
        }
        nav.appendChild(p);
        // nav.classList.add('navegacion-principal');
        nav.classList.add('navegacion-principal-modal');
        
        //crea el overlay con el menu
        const overlay=document.createElement('DIV');
        overlay.appendChild(nav);
        overlay.classList.add('overlay-menu');
        overlay.onclick=function() {
            overlay.remove();
        }
        
                
        //añade el overlay al HTML
        const body=document.querySelector('body');
        body.appendChild(overlay);
        // body.classList.add('menu-body');
    }
    
}

function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreFestival=document.querySelector('.sobre-festival');
    const body=document.querySelector('body');

    window.addEventListener('scroll', function(){
        
        if( sobreFestival.getBoundingClientRect().bottom<0){
            // console.log('lleuge');    
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }else{
            // console.log('no lleuge');    
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function scrollNav() {
    const enlaces= document.querySelectorAll('.navegacion-principal-mq a');
    enlaces.forEach(enlace=>{
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            // console.log(e.target.attributes.href.value);
            const seccionScroll=e.target.attributes.href.value;
            const seccion= document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior:'smooth'});

        });
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    
    for (let i=1; i<=12;i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML=`
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria ${i}">
        `;
        imagen.onclick=function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement('picture');
        imagen.innerHTML=`
            <source srcset="build/img/grande/${id}.avif" type="image/avif">
            <source srcset="build/img/grande/${id}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria ${id}">
        `;
        //crea el overlay con la imagen
        const overlay=document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        overlay.onclick=function(){
            const body=document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();
        }

        //boton para cerrar el modal
        const cerrarModal=document.createElement('P');
        cerrarModal.textContent='X';
        cerrarModal.classList.add('btn-cerrar');
        cerrarModal.onclick=function(){
            const body=document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();
        }

        overlay.appendChild(cerrarModal);
        
        //añade el overlay al HTML
        const body=document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');
}