const tempo = document.querySelector("#tempo");

function updateTimer() {
  futuro = Date.parse("feb 25, 2023 07:00:00");

  agora = new Date();
  diff = futuro - agora;

  dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  horas = Math.floor(diff / (1000 * 60 * 60));
  minutos = Math.floor(diff / (1000 * 60));
  segundos = Math.floor(diff / 1000);

  d = dias;
  h = horas - dias * 24;
  m = minutos - horas * 60;
  s = segundos - minutos * 60;

  tempo.innerHTML = `${d} : ${h} : ${m} : ${s}`;

  if (agora > futuro) {
    console.log("a")
    tempo.innerHTML = "Tempo esgotado";
    clearInterval(intervalID);
  }
}

const intervalID = setInterval("updateTimer()", 1000);
