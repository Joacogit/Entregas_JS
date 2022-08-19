let entrada1 = document.getElementById("cuotas");
let entrada2 = document.getElementById("cantcuotas");

entrada1.addEventListener('submit', (e) => {
  e.preventDefault();
  console.dir(e.target);

  const formulario = e.target;

  const calculo = {
    importe: parseInt(formulario[0].value),
    OpcdeCuota: parseInt(formulario[1].value),
    resultado: parseInt(formulario[2].value)
  }

function division (entrada1, entrada2){
  resultado = entrada1 / entrada2
}

  if (calculo.OpcdeCuota != 3 || 6 || 12 || 18) {
    const p = document.getElementById('mensaje-error');
    p.innerText = 'Ingrese una opción de cuotas válida para calcular';
    return 
  }

  //_______________________________ Simplifcación del IF (ternario)_____________________________________________________
  OpcdeCuota != 3 || 6 || 12 || 18 ? console.log("Opciones de cuotas") : console.log("La opción elegida no es válida")



  const tabla = document.getElementById('tabla_cuotas');
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${calculo.importe}</td>
    <td>${calculo.OpcdeCuota}</td>
    <td>${calculo.resultado}</td>
  `;

  tabla.append(tr);

  document.querySelectorAll('#cuotas').forEach((input) => {
    input.value = '';
  });
});


