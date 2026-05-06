let index = 0;
const slides = document.getElementById("slides");
const totalSlides = 3;

setInterval(() => {
    index++;

    if (index >= totalSlides) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000); // cambia cada 3 segundos
