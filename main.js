const tempo = document.querySelector("#tempo");

const segundo = 1000;
const minuto = 60 * segundo;
const hora = 60 * minuto;
const dia = 24 * hora;

function updateTimer() {
  dataFinal = Date.parse("Feb 25 2023 07:00:00 GMT-3");
  dataAtual = Date.now();
  let diff = dataFinal - dataAtual;

  const dias = Math.floor(diff / dia);
  diff -= dias * dia;
  const horas = Math.floor(diff / hora);
  diff -= horas * hora;
  const minutos = Math.floor(diff / minuto);
  diff -= minutos * minuto;
  const segundos = Math.floor(diff / 1000);

  tempo.innerHTML = `${dias} : ${horas} : ${minutos} : ${segundos}`;

  if (dataAtual > dataFinal) {
    tempo.innerHTML = "Tempo esgotado";
    clearInterval(intervalID);
  }
}

const intervalID = setInterval("updateTimer()", 1000);
