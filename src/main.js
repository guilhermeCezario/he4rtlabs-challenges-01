var horasDiarias = document.querySelector('#horasDiarias');
var diasEfetivos = document.querySelector('#diasEfetivos');
var diasFerias = document.querySelector('#diasFerias');
var valorProjeto = document.querySelector('#valorProjeto');
var valorHora = document.querySelector('#valorHora');

function calcular() {
  console.log("entrou");
  if(horasDiarias.value && diasEfetivos.value && diasFerias.value && valorProjeto.value){
    valorHora.textContent = (valorProjeto.value / (diasEfetivos.value * 4 * horasDiarias.value) ) + ( ( diasFerias.value * diasEfetivos.value * horasDiarias.value ) );
  }
}

document.querySelector('#buttonCalcular').onclick = calcular;