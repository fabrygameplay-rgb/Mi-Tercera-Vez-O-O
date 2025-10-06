const NúmeroDiscreto = Math.floor(Math.random() * 10) + 1;
const Entra = document.getElementById("Número-Del-Usuario");
const Botón = document.querySelector(".botón");
const Sale = document.querySelector(".contenedor-imagen");
const calla_mrd = document.getElementById("calla_mrd");

function mostrarImagen(resultado) {
    calla_mrd.innerHTML = "";
    calla_mrd.style.display ="flex";

    let img = document.createElement("img");

    if (resultado === "correcto") {
        img.src ="imágenes/Tu vieja.png";
        img.alt = "¡Canchis, Canchis!";
    } else {
        img.src = "imágenes/Calla, mierda.png";    
        img.alt = "virginal";
    }

    img.style.width = "100%";
    img.style.height = "100%";

    calla_mrd.appendChild(img);
}

Botón.addEventListener("click", () => {
    const Intento = parseInt(Entra.value);

    if (isNaN(Intento)) {
        Sale.style.backgroundColor = "cornsilk";
        Sale.innerText = "❌, ¿UCV, no?";
        mostrarImagen("incorrecto");
    } else if (Intento === NúmeroDiscreto) {
        Sale.style.backgroundColor = "seagreen";
        Sale.innerText = "🎉, Kcheras@";
        mostrarImagen("correcto");
    } else if (Intento < NúmeroDiscreto) {
        Sale.style.backgroundColor = "salmon";
        Sale.innerText = "⬆️, Tont@";
        mostrarImagen("incorrecto");
    } else {
        Sale.style.backgroundColor = "salmon";
        Sale.innerText = "⬇️, Tont@";
        mostrarImagen("incorrecto");
    }

    Entra.value = "";
    Entra.focus();
});
