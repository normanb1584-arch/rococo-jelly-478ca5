// Berntsen Multiservice JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Berntsen Multiservice website loaded');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !phone) {
                alert('Vennligst fyll ut alle påkrevde felt.');
                return;
            }
            
            // Create email content
            const emailContent = `
Ny forespørsel fra Berntsen Multiservice hjemmeside:

Navn: ${name}
E-post: ${email}
Telefon: ${phone}
Tjeneste: ${service || 'Ikke spesifisert'}
Melding: ${message || 'Ingen melding'}

---
Sendt fra hjemmesiden: ${window.location.href}
            `;
            
            // Create mailto link
            const mailtoLink = `mailto:norman@berntsen-multiservice.no?subject=Ny forespørsel fra ${name}&body=${encodeURIComponent(emailContent)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Takk for din forespørsel! Din e-postklient vil åpne seg med en forhåndsutfylt melding.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'white';
            header.style.backdropFilter = 'none';
        }
    });
});
