const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// ForEach
// carrito.forEach( producto => console.log(producto.nombre));
carrito.forEach(function(producto){
    console.log(producto.nombre);
})

// map
// const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);
const arreglo2=carrito.map(function(producto){
    return {nombreyprecioConiva:`${producto.nombre} - ${producto.precio*1.21} (iva incluido)`, precioSiniva:`${producto.precio}`};
})

arreglo2.forEach(producto=>console.log(producto.nombreyprecio));


console.log(arreglo2);