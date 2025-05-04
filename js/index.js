        // Smooth scroll function
        function smoothScroll(target) {
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Interactive card hover effect
        const card = document.querySelector('.card');
        const cardContainer = document.querySelector('.card-container');
        
        if (window.matchMedia('(hover: hover)').matches) {
            cardContainer.addEventListener('mousemove', (e) => {
                const rect = cardContainer.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            cardContainer.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0deg) rotateY(0deg)';
            });
        }