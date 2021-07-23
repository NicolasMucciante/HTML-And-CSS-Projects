function openForm() { //Opens and closes the form
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var slideIndex = 1; //This will display the first image in the slideshow when the page loads
showSlides(slideIndex);

function plusSlides(n) { //This changes the slide when the left or right arrows are clicked
    showSlides(slideIndex += n);
}

function currentSlide(n) { // This function changes the slide when the dots are clicked
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}