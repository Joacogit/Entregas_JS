// MOLDE PARA LA CREACION DE LOS PRODUCTOS

class Producto {
    constructor(nombre, precio, id, descripcion, imagen) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.id = id;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    
    // METODO DE LA CLASE, EN ESTE EJEMPLO NO LO USE PERO PARA QUE RECUERDEN QUE PUEDEN TENER
    precioIva () {
        return this.precio * 1.21
    }

    
}
