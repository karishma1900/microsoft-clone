const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dots .dot');
const prevBtn = document.querySelector('.arrow-prev');
const nextBtn = document.querySelector('.arrow-next');
let currentSlide = 0;
let autoSlideInterval;

// Function to show current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
            dots[i].classList.add('active');
        } else {
            slide.style.display = 'none';
            dots[i].classList.remove('active');
        }
    });
}

// Function to go to previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Function to go to next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function to handle automatic sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Adjust the interval as needed (in milliseconds)
}

// Event listeners for arrow buttons
prevBtn.addEventListener('click', () => {
    prevSlide();
    clearInterval(autoSlideInterval);
    startAutoSlide();
});
nextBtn.addEventListener('click', () => {
    nextSlide();
    clearInterval(autoSlideInterval);
    startAutoSlide();
});

// Event listener for dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        clearInterval(autoSlideInterval);
        startAutoSlide();
    });
});

// Show initial slide and start automatic sliding
showSlide(currentSlide);
startAutoSlide();
