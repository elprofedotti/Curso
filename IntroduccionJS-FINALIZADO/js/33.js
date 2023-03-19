async function obtenerEmpleados() {

    const archivo = 'empleados.json';

    // fetch(archivo)
    //     // .then(resultado=>console.log(resultado))
    //     .then( resultado => resultado.json())
    //     .then( datos => {
    //         // console.log(datos.empleados);

    //         const { empleados } = datos;
    //         document.querySelector('#titulo').textContent="";
    //         empleados.forEach(empleado => {
    //             console.log(empleado.id);
    //             console.log(empleado.nombre);
    //             console.log(empleado.puesto);

    //             document.querySelector('#titulo').textContent+=empleado.nombre;
                
    //         });
           
    //     });

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();