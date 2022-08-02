class Productos {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre;
        this.precio = precio; 
    }

    
    precioIva () {
        return this.precio * 1.21
    }
}

const lista_productos = []; // ARRAY que guarda LOS PRODUCTOS

lista_productos.push( new Productos(1, "APLIQUE_DE_PARED", 1000))
lista_productos.push( new Productos(2, "CUADRO_CON_LAMPARA", 2000))
lista_productos.push( new Productos(3, "CUADRO_DECO_CON_LUZ", 3000))
lista_productos.push( new Productos(4, "VELADOR_DE_PARED", 4000))
lista_productos.push( new Productos(5, "CUADRO_CON_ESTANTE", 5000))
lista_productos.push( new Productos(6, "LAMPARA_DECO", 6000))


// RECORRER el ARRAY QUE TIENE OBJETOS, Y ACCEDE A LOS DATOS DE CADA OBJETO
for (const articulo of lista_productos) {
    
    console.log("----------recorrido de for-------------")
    console.log("id=", articulo.id)
    console.log("nombre=", articulo.nombre)
    console.log("precio=", articulo.precio)
    // OBVIO ACA PUEDEN HACER LA LOGICA QUE SE LES OCURRA, LES MUESTRO SOLAMENTE COMO ACCEDER A LA INFO
}


console.log("----------buscar por algun atributo-------------")


// PONGO UNA VARIABLE QUE VA A TENER UN ID QUE QUIERO BUSCAR, PODRIA SER POR NOMBRE O LO Q QUIERAN, PERO SIEMPRE ES MAS FACIL POR ID, PORQUE SE TIENDE A HACER NO REPETIBLE
let id_buscado = 0

// BUSCAR EN LA LISTA, CADA ELEMENTO, HASTA ENCONTRAR EL QUE TENGA ESE ID
let respuesta = lista_productos.find(articulo => articulo.id = id_buscado)

// NOTAR QUE NOS DEVUELVE ==> EL OBJETO QUE TIENE ESE ID, OSEA QUE NO SOLO TENEMOS ACESSO AL ID, SINO TAMBIEN A SUS ATRIBUTOS Y METODOS
console.log("")
console.log(respuesta)
console.log("2")
console.log(respuesta.id)
console.log(respuesta.nombre)
console.log(respuesta.precio)
console.log(respuesta.precioIva())



// ________________________________   FORMULARIO DE COMPRA _________________________________
const formulario = document.getElementById('formulariodecompra');           //traer el elemento "formulario" del DOM

formulario.addEventListener ('submit', (e) => {                             // agrego el elemento submit
    e.preventDefault();                                                     //desactiva refresh
    document.getElementById('producto')                                     //busca como se llama el ID del input
    console.dir(e.target);

    const formulario = e.target;
    let productoSeleccionado = {                // creacion de variable que contiene OBJETO

        // propiedades del objeto como CLAVE/VALOR
        producto: formulario[0].value,
        valor: parseInt(formulario[1].value),
        cantidad: parseInt(formulario[2].value),
        cuotas: parseInt(formulario[3].value),
        
    }
    /*/__________ Msj de Error_____________
function msjerror(){
    if (producto.producto === '' || producto.valor || producto.cantidad || producto.cuotas != 3,6,12,18){
        const p = document.getElementById('mensaje-error');
        p.innerText = 'Por favor ingrese todos los valores y/o un valor correcto';
    }
     else{
        p.innerText = msjerror()
    }
}
    */

    // __________________________         TABLA            _________________________________

    const tabla = document.getElementById('tabla'); //vinculo la tabla por nombre de ID
    const fila = document.createElement('tr');  // elemento q va a contener la fila de la tabla

    //INNER HTML MODIFICA EL HTML => los tag td contienen las entradas q se vayan tipeando
    fila.innerHTML = `                          
    <td>${productoSeleccionado.producto}</td>           
    <td>${productoSeleccionado.valor}</td>
    <td>${productoSeleccionado.cantidad}</td>
    <td>${productoSeleccionado.cuotas}</td>
    `
    tabla.append(fila);    

    /*/document.querySelectorAll('#formulariodecompra input').forEach((input) =>{
        input.value = '';
    });*/
});




//_______________________________________________________________________________________________________________

let valor = document.getElementById("valor").value;           // SOLICITUD 1 : ingrese valor del producto                      
let valorParseado = parseInt(valor);                                         

let cantidad = document.getElementById("cantidad").value;           // ingrese valor del producto                      
let cantidadParseada = parseInt(cantidad);                                         

let cuotas = document.getElementById("cuotas").value; // Elija su pago en 3, 6, 12 o 18 cuotas sin interés:             
let cantCuotasParseada = parseInt(cuotas);   

let resultado = 0 ;

// Declaración de funciones__________________________________________________________________________________________

function calcular (valorParseado, cantidadParseada, cantCuotasParseada) {    // declaracion de parametros     
    resultado = valorParseado * cantidadParseada / cantCuotasParseada;    // multip por la cant y divide por op cuotas y asigna a resultado
}

function mostrar (){
    let p = document.createElement('p');
    p.innerText = "Su pago será de $" + resultado + " mensualmente.";   //             muestra de resultado
    document.body.append(p);
} 

// _____________ Fin declaración de funciones ___________________________________________________________________________________

if (opcionesDeCuotas.includes(cantCuotasParseada)) {  //'opcdecuotas' incluye 'cantdecuotasparseadas' q puso el usuario?
//                   ↳    si eso es verdadero, si se cumple  ↴
    calcular (valorParseado, cantidadParseada, cantCuotasParseada);             // llamada a la funcion a calcular
    mostrar(resultado);                                                         // llamada a la funcion a mostrar
}


