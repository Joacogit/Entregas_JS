const productos = [
{
    nombre:'APLIQUE DE PARED',
    precio: '$1000',
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30",
},
{
    nombre: 'CUADRO CON LÁMPARA',
    precio: '$2000',
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
},
{
    nombre: 'CUADRO DECO CON LUZ', 
    precio: '$3000',
    materiales: "madera, luces a pilas",
    medidas: "30 x 20 x 30",
},
{
    nombre: 'VELADOR DE PARED', 
    precio: '$4000',
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
},    
{
    nombre: 'CUADRO CON ESTANTE', 
    precio: '$5000',
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
},
{
    nombre: 'LÁMPARA DECO', 
    precio: '$6000',
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
},
];

//____________________________________________CICLO QUE RECORRE EL ARRAY___
const ul = document.createElement('ul')
for (const producto of productos ){
    const li = document.createElement('li');
    li.innerHTML = `
            <p card h-100><strong>${producto.nombre}</strong><p>
            <button id=btn class="card-link btn btn-primary">${producto.precio}</button>
        
            `;
    ul.append(li);
}
// inner de los nombres del array___________________________________________
document.getElementById('lista_de_productos').append(ul);

//____________________________________________________ BOTON - EVENTO
const boton = document.getElementById('btn');
boton.onclick = () => {
    console.log('hice click'); 
}

// _____________________________________
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
  e.preventDefault();            //para q no haga el refresh 
  console.log('mensaje enviado');
})
