 // Mobile Menu Toggle
 const mobileMenuBtn = document.getElementById('mobileMenuBtn');
 const nav = document.getElementById('nav');
 
 mobileMenuBtn.addEventListener('click', () => {
     nav.querySelector('ul').classList.toggle('active');
     mobileMenuBtn.innerHTML = nav.querySelector('ul').classList.contains('active') ? 
         '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
 });
 
 // Close mobile menu when clicking on a link
 document.querySelectorAll('nav ul li a').forEach(link => {
     link.addEventListener('click', () => {
         if (nav.querySelector('ul').classList.contains('active')) {
             nav.querySelector('ul').classList.remove('active');
             mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
         }
     });
 });
 
 // Sticky Header on Scroll
 const header = document.getElementById('header');
 
 window.addEventListener('scroll', () => {
     if (window.scrollY > 100) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });
 
 // Testimonial Slider
 const testimonialSlides = document.querySelectorAll('.testimonial-slide');
 const testimonialNavBtns = document.querySelectorAll('.testimonial-nav button');
 let currentSlide = 0;
 
 function showSlide(index) {
     testimonialSlides.forEach(slide => slide.classList.remove('active'));
     testimonialNavBtns.forEach(btn => btn.classList.remove('active'));
     
     testimonialSlides[index].classList.add('active');
     testimonialNavBtns[index].classList.add('active');
     currentSlide = index;
 }
 
 testimonialNavBtns.forEach((btn, index) => {
     btn.addEventListener('click', () => showSlide(index));
 });
 
 // Auto-rotate testimonials
 setInterval(() => {
     currentSlide = (currentSlide + 1) % testimonialSlides.length;
     showSlide(currentSlide);
 }, 5000);
 
 // Menu Filter
 const menuFilterBtns = document.querySelectorAll('.menu-categories button');
 const menuItems = document.querySelectorAll('.menu-item');
 
 menuFilterBtns.forEach(btn => {
     btn.addEventListener('click', () => {
         // Update active button
         menuFilterBtns.forEach(b => b.classList.remove('active'));
         btn.classList.add('active');
         
         const category = btn.dataset.category;
         
         // Filter menu items
         menuItems.forEach(item => {
             if (category === 'all' || item.dataset.category === category) {
                 item.style.display = 'block';
             } else {
                 item.style.display = 'none';
             }
         });
     });
 });
 
 // Form Submissions
 document.getElementById('bookingForm').addEventListener('submit', function(e) {
     e.preventDefault();
     alert('Thank you for your reservation request! We will contact you shortly to confirm your booking.');
     this.reset();
 });
 
 document.getElementById('contactForm').addEventListener('submit', function(e) {
     e.preventDefault();
     alert('Thank you for your message! We will get back to you soon.');
     this.reset();
 });
 
 // Smooth Scrolling for Anchor Links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         if (targetId === '#') return;
         
         const targetElement = document.querySelector(targetId);
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 80,
                 behavior: 'smooth'
             });
         }
     });
 });
 
 // Animation on Scroll
 function animateOnScroll() {
     const elements = document.querySelectorAll('.section-title, .menu-item, .about-container > div, .gallery-item, .event-card');
     
     elements.forEach(element => {
         const elementPosition = element.getBoundingClientRect().top;
         const screenPosition = window.innerHeight / 1.3;
         
         if (elementPosition < screenPosition) {
             element.style.opacity = '1';
             element.style.transform = 'translateY(0)';
         }
     });
 }
 
 // Set initial state for animated elements
 document.querySelectorAll('.section-title, .menu-item, .about-container > div, .gallery-item, .event-card').forEach(el => {
     el.style.opacity = '0';
     el.style.transform = 'translateY(30px)';
     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 });
 
 window.addEventListener('scroll', animateOnScroll);
 window.addEventListener('load', animateOnScroll);
