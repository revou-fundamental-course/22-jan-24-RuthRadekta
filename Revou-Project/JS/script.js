document.addEventListener('DOMContentLoaded', function() {
    //ini buat slideshow
    let currentTestimonial = 0;
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        
    function showTestimonial(index) {
        testimonialSlides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
        showTestimonial(currentTestimonial);
    }

    setInterval(nextTestimonial, 5000);

    showTestimonial(currentTestimonial);

    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.addEventListener('click', nextTestimonial);
    }

    const prevButton = document.getElementById('prevButton');
    if (prevButton) {
        prevButton.addEventListener('click', prevTestimonial);
    }
    
    //ini buat faq secction
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });

    //ini buat transisi
    document.querySelector('.header').style.opacity = 1;
    document.querySelectorAll('.testimonial-slide').forEach(slide => {
        slide.style.opacity = 1;
    });

    document.querySelector('.header').style.opacity = 1;
    document.querySelector('.logo').style.opacity = 1;
    document.querySelector('.menu').style.opacity = 1;

    document.querySelector('.logo').style.transform = 'translateY(0)';
    document.querySelector('.menu').style.transform = 'translateY(0)';

    document.querySelectorAll('.testimonial-slide').forEach(slide => {
        slide.style.opacity = 1;
        slide.style.transform = 'translateY(0)';
    });

    document.querySelector('form').style.opacity = 1;
    document.querySelector('.popup').style.opacity = 1;

    document.querySelector('form').style.transform = 'translateY(0)';
    document.querySelector('.popup').style.transform = 'translateY(0)';

    const testimonialSection = document.querySelector('.testimonial-slideshow');

    function handleScroll() {
        const scrollPosition = window.scrollY;
        const sectionPosition = testimonialSection.offsetTop;
        const windowHeight = window.innerHeight;
        const packageSection = document.querySelector('.package-section');

        if (scrollPosition + windowHeight > sectionPosition) {
            testimonialSection.style.opacity = 1;
            testimonialSection.style.transform = 'translateY(0)';

            document.querySelectorAll('.testimonial-slide').forEach((slide, index) => {
                slide.style.transitionDelay = `${index * 0.2}s`;
                slide.style.opacity = 1;
            });

            document.querySelectorAll('.testimonial-slide img').forEach((img, index) => {
                img.style.transitionDelay = `${index * 0.2}s`;
                img.style.transform = 'translateY(0)';
            });

            document.querySelectorAll('.feature').forEach((feature, index) => {
                feature.style.transitionDelay = `${index * 0.2}s`;
                feature.style.opacity = 1;
            });

            window.removeEventListener('scroll', handleScroll);
        }

    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
});

    //ini buat validasi form
    function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.toLowerCase();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const allowedDomains = ['gmail.com', 'yahoo.com'];

        const successMessage = document.getElementById('successMessage');

        if (nameInput.checkValidity() && emailInput.checkValidity() && isAllowedDomain(emailValue, allowedDomains) && emailRegex.test(emailValue)) {
            successMessage.style.display = 'block';
            return true;
        } else {
            openPopup();
            successMessage.style.display = 'none';
            return false;
        }
    }

    function isAllowedDomain(email, allowedDomains) {
        const domain = email.split('@')[1];
        return allowedDomains.includes(domain);
    }

    function openPopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
    }

    function closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
    }
