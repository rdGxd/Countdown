const tempo = document.querySelector("#tempo");

const segundo = 1000;
const minuto = 60 * segundo;
const hora = 60 * minuto;
const dia = 24 * hora;


function updateTimer() {
  // Formato da Data e Hora
  dataFinal = Date.parse("Feb 25 2023 07:00:00 GMT-3");

  // Pega a data atual do navegador
  dataAtual = new Date();

  // Calcula a diferença entre a data final do projeto e a data atual do navegador
  let diff = dataFinal - dataAtual;
  
  // Calculo de Dias, Horas, Minutos e Segundos
  const dias = Math.floor(diff / dia);
  diff -= dias * dia;
  const horas = Math.floor(diff / hora);
  diff -= horas * hora;
  const minutos = Math.floor(diff / minuto);
  diff -= minutos * minuto;
  const segundos = Math.floor(diff / 1000);

  tempo.innerHTML = `${dias} : ${horas} : ${minutos} : ${segundos}`;

// Mensagem quando a contagem acabar
  if (dataAtual > dataFinal) {
    tempo.innerHTML = "Tempo esgotado";
    clearInterval(intervalID);
  }
}

// Chama a função a cada 1s
const intervalID = setInterval("updateTimer()", 1000);
