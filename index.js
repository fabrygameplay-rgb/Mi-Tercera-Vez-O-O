const NúmeroDiscreto = Math.floor(Math.random() * 10) + 1;
const Entra = document.getElementById("Número-Del-Usuario");
const Botón = document.querySelector(".botón");
const Sale = document.querySelector(".contenedor-imagen"); // ✅ usamos class

Botón.addEventListener("click", () => {
    const Intento = parseInt(Entra.value);

    if (isNaN(Intento)) {
        Sale.style.backgroundColor = "cornsilk";
        Sale.innerText = "❌, ¿UCV, no?";
    } else if (Intento === NúmeroDiscreto) {
        Sale.style.backgroundColor = "seagreen";
        Sale.innerText = "🎉, Kcheras@";
    } else if (Intento < NúmeroDiscreto) {
        Sale.style.backgroundColor = "salmon";
        Sale.innerText = "⬆️, Tont@";
    } else {
        Sale.style.backgroundColor = "salmon";
        Sale.innerText = "⬇️, Tont@";
    }

    Entra.value = "";
    Entra.focus();
});
