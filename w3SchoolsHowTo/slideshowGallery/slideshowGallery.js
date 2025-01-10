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
    let gallery = document.getElementsByClassName("gallery");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("hidden");
    }
    for (i = 0; i < gallery.length; i++) {
        gallery[i].classList.add("opacity-60");
    }
    slides[slideIndex - 1].classList.remove("hidden");
    gallery[slideIndex - 1].classList.remove("opacity-60");
}
document.getElementById("prevButton").addEventListener("click", () => {
    plusSlides(-1);
});
document.getElementById("nextButton").addEventListener("click", () => {
    plusSlides(1);
});


document.getElementById("firstImage").addEventListener("click", () => {
    currentSlide(1);
});
document.getElementById("secondImage").addEventListener("click", () => {
    currentSlide(2);
});
document.getElementById("thirdImage").addEventListener("click", () => {
    currentSlide(3);
});
