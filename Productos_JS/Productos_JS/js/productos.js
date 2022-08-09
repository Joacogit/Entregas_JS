// ARRAY EN EL QUE ESTARAN GUARDADOS TODOS LOS PRODUCTOS QUE TRABAJO

const lista_productos = [];

lista_productos.push( new Producto("APLIQUE DE PARED", 1000, 1, "Construido con madera pintada y laqueada, caños, portalámpara vintage con perilla de encendido/apagado y lámpara de filamentos led cálida decorativa. Envíos a todo el país ¡Consultanos lo que necesites!"))

lista_productos.push( new Producto("CUADRO CON LÁMPARA", 2000, 2, "Madera Pintada y Laqueada. Portalámparas vintage con perilla de encendido/apagado. Lámpara 5 w cálida de filamentos decorativa. Cable textil de color a elección. Medidas: 60 x 38 cm Ideal para apoyar tus llaves, el celu, adornos, una plantita o tus libros preferidos. Envíos a todo el país ¡Consultanos lo que necesites!"))

lista_productos.push( new Producto("CUADRO DECO CON LUZ", 3000, 3, "Construido con madera laqueada, lienzo y luces a pilas. Medidas: 68 x 30 cm. Ideal para decorar tu hogar con la palabra o frase que mas te gusta y darle ese toque de iluminación cálido a tu espacio favorito. Envíos a todo el país ¡Consultanos lo que necesites!"))

lista_productos.push( new Producto("VELADOR DE PARED", 4000, 4, "Construido con madera pintada y laqueada, caños, portalámpara vintage con perilla de encendido/apagado, cable decorativo textil de color y lámpara de filamentos led cálida decorativa. Muy práctico y cómodo, ideal para colgar sobre tu mesita de luz y tener mas espacio en ella. Consultanos por WhatsApp disponibilidad y colores."))

lista_productos.push( new Producto("CUADRO CON ESTANTE", 5000, 5, "Madera Pintada y Laqueada. Medidas: 60 x 38 cm Ideal para apoyar tus llaves, el celu, adornos, una plantita o tus libros preferidos. Envíos a todo el país ¡Consultanos lo que necesites!"))

lista_productos.push( new Producto("LÁMPARA DECO", 6000, 6, "Construida con base de madera pintada y laqueada, caños, portalámpara vintage con perilla de encendido/apagado, cable decorativo textil de color y lámpara de filamentos led cálida decorativa. Medidas de la base: 30 x 12 cm."))


for (const elemento of lista_productos) { // recorre el array q tiene obj y accede a los datos de c uno
    //  console.log("id=", elemento.id)
    //  console.log("nombre=", elemento.nombre)
    //  console.log("precio=", elemento.precio)
    //  
    //  ACA se puede hacer cualquier LOGICA, ESTO ES UNA MUESTRA DE COMO ACCEDER A LA INFO
    }
    

//__________BUSCAR UN OBJETO EN PARTICULAR, en un array, POR UN IDENTIFICADOR________________________________________________________
// pongo una variable que va a tener un id que quiero buscar
// podria ser por nombre o lo q quieran, pero siempre es mas facil por id, porque se tiende a hacer no repetible
/*let id_buscado = 2

// _________BUSCAR EN LA LISTA, CADA ELEMENTO, HASTA ENCONTRAR EL QUE TENGA ESE ID
let respuesta = lista_productos.find(elemento => elemento.id == id_buscado)

// NOTAR QUE NOS DEVUELVE ==> EL OBJETO QUE TIENE ESE ID, OSEA QUE NO SOLO TENEMOS ACESSO AL ID, SINO TAMBIEN A SUS ATRIBUTOS Y METODOS
console.log("----------OBJETO-------------")
console.log(respuesta)
console.log("----------ACCESO AL OBJETO-------------")
console.log(respuesta.id)
console.log(respuesta.nombre)
console.log(respuesta.precio)
console.log(respuesta.precioIva())
*/



