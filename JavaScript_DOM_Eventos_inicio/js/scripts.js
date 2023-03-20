//queryselector
const heading=document.querySelector('#heading'); //retorna 0 o 1 elemento
heading.textContent="Nuevo heading";

//queryselectorall
const enlaces=document.querySelectorAll('.navegacion a');//retorna 0 o todos los elementos
console.log(enlaces[4]);
//enlaces[0].textContent="nuevo texto para enlace";
enlaces[0].href="google.com";
//enlaces[0].classList.remove("navegacion__enlace");

//queryselectorbyid
// const heading2=document.getElementById('heading');
// console.log(heading2);

//generar un nuevo enlace
const nuevoEnlace=document.createElement('A');

//agregar el href
nuevoEnlace.href="https://marketingkairos.com/opabogado";

//agregar el texto
nuevoEnlace.textContent="soy un nuevo enlace generado pos JS, y te llevo a una landing de abogados";

//agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

//agregarlo al documento (DOM)
//busco el p dentro de la clase header__texto, y lo agrego
const p=document.querySelector('.header__texto p');
p.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos en JavaScript...

// Hay muchos eventos ocurriendo en tus sitios y aplicaciones web, cuando un usuario da click, cuando dan scroll, al presionar en un botón, enviar un formulario, pero uno de los más comunes es esperar a que el documento este listo...

console.log('1');
window.addEventListener('load', function() { // Cuando el Archivo JS y los archivos dependientes han cargado como es el HTML y las imagenes...
    console.log('2');
});

window.onload = function() {
    console.log('3')
};

document.addEventListener('DOMContentLoaded', imprimir); // Este se ejecuta cuando el HTML ha sido descargado pero no espera por CSS o imagenes...

function imprimir(){
    console.log('4');
}    

console.log('5');

// Estos closures también pueden ser con una función aparte...

// Eventos Scroll...
window.onscroll = function(e) {
    console.log('scrolling...');
}

//seleccionar elementos y asociarles un evento
//cuando escuchamos click, cualquier elemento puede tener un click
// const btnEnviar=document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click',function(e){
//     console.log(e);
//     e.preventDefault();//prevengo la accion por defecto, la evito... sirve para validar formularios
//     console.log('Enviando formulario');
// });


//evento submit
//el submit es cuando escuchamos un formulario, q tiene q tener un sibmit minimamente
const formulario=document.querySelector('.formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //validar formulario
    const {nombre, email, mensaje}=datos;
    console.log(nombre);
    console.log(email);
    console.log(mensaje);
    if(nombre==='' || email==='' || mensaje===''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    //enviar formulario
    //console.log('enviando formu');
    mostrarAlerta('Formulario enviado con exito');
});


//eventos de los inputs y textarea
const datos={
    nombre:'',
    email:'',
    mensaje:''
}

const nombre= document.querySelector('#nombre');
const email= document.querySelector('#email');
const mensaje= document.querySelector('#mensaje');
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id]=e.target.value;
    // console.log(datos);
}

//muestra un error en pantalla
function mostrarError(mensaje){
    // console.log(mensaje);
    const error = document.createElement('P');
    error.textContent=mensaje;
    error.classList.add('error');
    formulario.appendChild(error);
    //que desaparezca la advertencia luego de x segundos
    setTimeout(()=>{
        error.remove();
    },3000);

}

function mostrarMensaje(mensaje){
    const notif = document.createElement('P');
    notif.textContent=mensaje;
    notif.classList.add('correcto');
    formulario.appendChild(notif);
    //que desaparezca la advertencia luego de x segundos
    setTimeout(()=>{
        notif.remove();
    },3000);
}

//ahora un refactoring de las ultimas dos funciones muy similares

function mostrarAlerta(mensaje, error=null){
    const alerta = document.createElement('P');
    alerta.textContent=mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    //que desaparezca la advertencia luego de x segundos
    setTimeout(()=>{
        alerta.remove();
    },3000);   
}