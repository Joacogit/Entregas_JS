//___                  MANIPULACION DEL DOM                             
//      A través de DOM: cargo todos los PRODUCTOS DEL Array en el HTML 

//      A través del ID traigo el ELEMENTO del DOM que quiero ↓
                                                                    // IMPORTANTE: EL ID EN EL HTML TIENE QUE SER UNICO, NO SE PUEDE REPETIR            
const dom_producto = document.getElementById("cards_productos")     //→ DOM: declaro variable "dom_producto → donde voy a appendear el div del innerHTMl   
const dom_carrito = document.getElementById("tabla")                //→ DOM: DONDE VA LA TABLA

for (const elemento of lista_productos) {       //  ---→ Recorrido del Array de Productos 
    const div = document.createElement("div")
    
    //elemento div con una card de BS y atributos de cada objeto ⬇️
    div.innerHTML = `
    
    <div class="container-fluid">
        <div row g-4 id="cards_productos"> 
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card h-100">
                    <img ${elemento.imagen} alt="">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <h5>${elemento.nombre}</h5>
                            <p class="card-text">${elemento.descripcion}</p>
                            <p class="card-text text-success">$${elemento.precio}</p>
                            <a href="galeria.html" class="card-link btn btn-primary">VER MAS</a>
                            <hr>
                            <a href="#" id="${elemento.id}" class="btn btn-primary mi_evento">Agregar al Carrito!</a>
                        </div> 
                </div> 
            </div>
        </div>
    </div>
    `
    // Y dps se APENDEA EL ELEMENTO DEL DOM
    dom_producto.append(div) // ⇒ donde van los productos
}




//______________________________________________________  SUMA DE PRODUCTOS  ________________________________________________________________

class EltotaldelCarrito {
    constructor() {
        this.carriTotal = []
        this.total = 0
    }

    agregaAlCarrito(producto){
        this.carriTotal.push(producto)
        console.log(this.carriTotal)
    }

    muestraCarrito(){
        return this.carriTotal
    }
}

const carro = new EltotaldelCarrito()


//_______________ funcion sumar carrito ________________

const importeTotal = document.getElementById("total_compra")
let suma = document.createElement('div');     //  =====>>>  createElement se usa para crear etiquetas de HTML, no podes ponerle 'total_compra' xq no sabe que es

function CambiarValorCarrito() {
    let carrito = carro.muestraCarrito() //  =====>>> obtengo el array con lo que esta en el carrito, y lo paso por el reduce
    console.log(carrito);
    let CompraTotal = carrito.reduce((acc, producto) => { return acc + producto.precio;}, 0) // porque a lista_productos le haces el reduce? tendria que ser al array del carrito, ademas lo multiplicabas por cantidad que no existe en el objeto
    console.log(CompraTotal)

    suma.innerHTML = `
    <th id="total"><strong> EL TOTAL DE LA COMPRA ES: $${CompraTotal}</strong></th>
    `    
    importeTotal.append(suma) //  =====>>> tenias puesto apend div, aca tenes que appendear la variable que tiene el elemento html que creaste, "suma"
}






// __________________________   EVENTO BOTONES DE AGREGAR AL CARRITO ⬇️ _______________________________________________________________________________________________________


// Con CLASSNAME traigo los ELEMENTOS del DOM que tengan la clase "mi_evento"  ⬇️
const evento_boton_agregar = document.getElementsByClassName("mi_evento")       // ⇒ EVENTO q depende el boton q se toque agrega al carrito

// IMPORTANTE 
//ElementsByClassName devuelve 1 Array de ELEMENTOS del DOM; por lo cual, hay q recorrer el Array de ELEMENTOS, y aplicar el Evento 1 x 1

for (const elemento of evento_boton_agregar) {
    elemento.addEventListener("click", (event) => {                         // ⇒ ADDEVENTLISTENER solo se puede aplicar a un solo ELem. del DOM a la vez
        event.preventDefault()                                              // ⇒ con prevent, se previene q el 'E' recarge la pag al clickear
        console.log(event.target.id)                                        // ⇒ prod selecc en base al ID ⇨ en el HTML de los prod, el ID del BOTON debe ser el ID del Prod.
        
        let producto = lista_productos.find(item => item.id === parseInt(event.target.id))
        const tr = document.createElement('tr');                            // ⇒ cada vez q se ejecute el 'E' → creará el Elemento TR y le pondrá los datos del Producto
        
        tr.innerHTML =`
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$ ${producto.precio}</td>
            `
        carro.agregaAlCarrito(producto) //  =====>>>    aca cuando lo agregamos en la tabla, tambien lo agregamos al carrito real
        CambiarValorCarrito()
        dom_carrito.append(tr)                                                  // ⇒ con append lo agrega al final de la tabla del DOM

    })  
}

//setItem → guarda en el navegador (clave/valor)

localStorage.setItem('Articulo1','Aplique de pared');
localStorage.setItem('Articulo2','Cuadro con lámpara');
localStorage.setItem('Articulo3','Cuadro deco con luz');
localStorage.setItem('Articulo4','Velador de pared');
localStorage.setItem('Articulo5','Cuadro con estante');
localStorage.setItem('Articulo6','Lámpara deco');

//getItem → devuelve el valor correspondiente a la clave q le marco 
const Articulo = localStorage.getItem('Articulo1');
console.log(Articulo);




