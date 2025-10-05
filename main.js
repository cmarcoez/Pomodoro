// Variables

const inicio = document.getElementById("inicio");
const pausa = document.getElementById("pausa");
const restablecer = document.getElementById("restablecer");
const temporizador = document.getElementById("temporizador");

// Variables utilizadas para las funciones.

let tiempoRestante = 1500;
let intervalo;

// Función para actualizar el tiempo del temporizador.

const actualizarTiempo = () => {
  const segundos = tiempoRestante % 60;
  const minutos = Math.floor(tiempoRestante / 60);

  temporizador.innerHTML = `${minutos.toString().padStart(2, "0")}:${segundos
    .toString()
    .padStart(2, "0")}`;
};

// Función para iniciar el temporizador y definimos un resultado al haber acabado el tiempo restante.

const inicioTemporizador = () => {
  intervalo = setInterval(() => {
    tiempoRestante--;
    actualizarTiempo();

    if (tiempoRestante === 0) {
      clearInterval(intervalo);
      alert("¡Se acabó el tiempo!");
      tiempoRestante = 1500;
      actualizarTiempo();
    }
  }, 1000);
};

// Función para parar el temporizador.

const pararTemporizador = () => clearInterval(intervalo);

// Función para restablecer el temporizador a su tiempo inicial (25:00).

const restablecerTemporizador = () => {
  clearInterval(intervalo);
  tiempoRestante = 1500;
  actualizarTiempo();
};

inicio.addEventListener("click", inicioTemporizador);
pausa.addEventListener("click", pararTemporizador);
restablecer.addEventListener("click", restablecerTemporizador);
