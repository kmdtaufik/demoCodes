let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("hidden");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("bg-gray-700");
    }
    slides[slideIndex - 1].classList.remove("hidden");
    dots[slideIndex - 1].classList.add("bg-gray-700");
}
document.getElementById("prevButton").addEventListener("click", () => {
    plusSlides(-1);
});
document.getElementById("nextButton").addEventListener("click", () => {
    plusSlides(1);
});

const firstImage = document.getElementById("firstImage");
const secondImage = document.getElementById("secondImage");
const thirdImage = document.getElementById("thirdImage");
firstImage.addEventListener("click", () => {
    currentSlide(1);
});
secondImage.addEventListener("click", () => {
    currentSlide(2);
});
thirdImage.addEventListener("click", () => {
    currentSlide(3);
});
