let index = 0;
let images = document.querySelectorAll('.carrusel-image');
let btnPrev = document.querySelector(".btn-prev");
let btnNext = document.querySelector(".btn-next");


const showImage = (indexS) => {
    images.forEach(img => img.classList.remove('active'));
    images[indexS].classList.add('active');
}
const updateButtons = () => {
    if (index === 0) {
        btnPrev.style.visibility = "hidden";
    } else {
        btnPrev.style.visibility = "visible"; 
    }

    if (index === images.length - 1) {
        btnNext.style.visibility = "hidden";
    } else {
        btnNext.style.visibility = "visible";
    }
};

const prevSlide = () => {
    index = (index - 1) % images.length;
    showImage(index);
    updateButtons();

};

const nextSlide = () => {
    index = (index + 1) % images.length;
    showImage(index);
    updateButtons(); 

};

updateButtons();
