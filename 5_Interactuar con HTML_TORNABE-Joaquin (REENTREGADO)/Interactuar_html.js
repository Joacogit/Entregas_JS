const listaProductos = [];                                                       //Array vacio

let entradaProducto;                                                             //dec var entradaprod
do {
    entradaProducto = prompt("Ingrese un producto, ingrese FIN para terminar:"); // introducir producto
    if (entradaProducto != "FIN")   {                                            // si es dintinto de FIN            
        listaProductos.push(entradaProducto);                                    // introduce elemento al array con push al final            
    }
} while (entradaProducto != "FIN");                                              // mientras entrada sea dist a FIN, vuelve a preguntar

alert("Productos seleccionados: " + listaProductos.length + " productos." );     // imprime msj con cantidad de elementos
alert("Productos seleccionados: \n" + listaProductos.join("\n"));                // imprime con saltos de linea

//________________________________________________________________________________________________________________________________


alert("CALCULE SU PAGO EN CUOTAS")

let entrada = prompt("Ingrese el valor del producto seleccionado para calcular:");           // solicitud 1                        
let entradaParseada = parseInt(entrada);                                         

let cantidadDeCuotas = prompt("Elija su pago en 3, 6, 12 o 18 cuotas sin interés:");         // solicitud 2             
let cantCuotasParseada = parseInt(cantidadDeCuotas);   

let resultado = 0;

// ___________________________________________________________    Array    _______________________________________________________
const opcionesDeCuotas = [3,6,12,18];
console.log('Join =', opcionesDeCuotas.join(' | '));

// Declaración de funciones__________________________________________________________________________________________

function division(entrada, cantidadDeCuotas) {          // Función que divide dos números y asigna a resultado
    resultado = entrada / cantidadDeCuotas
}
function mostrar(mensaje) {                            // Función para muestra de resultado
    alert("Su pago será de $" + mensaje + " mensualmente.")
}

// _____________ Fin declaración de funciones ___________________________________________________________________________________


if (opcionesDeCuotas.includes(cantCuotasParseada)) {  //'opcdecuotas' incluye 'cantdecuotasparseadas' q puso el usuario?
//                   ↳    si eso es verdadero, si se cumple  ↴
    division(entrada, cantCuotasParseada);            // llamada a la funcion a dividir
    mostrar(resultado);                               // llamada a la funcion a mostrar
}

else {
    alert("La opción ingresada no es correcta")       // ←- si da falso, si no cumple con las opciones q dispone el array
}



// ________________________________   FORMULARIO DE COMPRA _________________________________
const formulario = document.getElementById('formulariodecompra');           //traer el elemento "formulario" del DOM

formulario.addEventListener ('submit', (e) => {                             // agrego el elemento submit
    e.preventDefault();                                                     //desactiva refresh
    document.getElementById('producto')                                     //busca como se llama el ID del input
    console.dir(e.target);

    const formulario = e.target;

    const producto = {                // creacion de variable que contiene objeto

        // propiedades del objeto como CLAVE/VALOR

        producto: formulario[0].value,
        cantidad: parseInt(formulario[1].value),
        valor: parseInt(formulario[2].value),
        cuotas: parseInt(formulario[3].value)
    }
    console.log(producto);


    // __________________________         TABLA            _________________________________

    const tabla = document.getElementById('tabla'); //vinculo la tabla por nombre de ID
    
    const fila = document.createElement('tr');  // elemento q va a contener la fila de la tabla

    //INNER HTML MODIFICA EL HTML => los tag td contienen las entradas q se vayan tipeando
    fila.innerHTML = `                          
    
    <td>${producto.producto}</td>           
    <td>${producto.cantidad}</td>
    <td>${producto.valor}</td>
    <td>${producto.cuotas}</td>
    
    `
    
    tabla.append(fila);

});
