function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        depth:200,
        modifier:1,
        slidesShadows: false,
        rotate:0,
        stretch:0
    }
})

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phone = document.getElementById('phone').value;

    
    if (name && email && message && validateEmail(email)) {
        

        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Enviando su mensaje...';
        successMessage.style.display = 'inline-block';

        this.submit();
    } else {
        if (!validateEmail(email)) {
            document.getElementById('emailError').textContent = 'Email inválido';
        }
        if (!name || !email || !message) {
            document.getElementById('nameError').textContent = 'Este campo es obligatorio';
            document.getElementById('emailError').textContent = 'Este campo es obligatorio';
            document.getElementById('messageError').textContent = 'Este campo es obligatorio';
        }
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}