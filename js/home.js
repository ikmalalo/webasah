
        // tambah floating particles
        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position on screen
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            
            // Random size between 4-10px
            const size = Math.random() * 15 + 4;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random animation type
            if (Math.random() > 0.5) {
                particle.classList.add('float-up');
            } else {
                particle.classList.add('drift');
            }
            
            document.body.appendChild(particle);
            
            // hapuse particle stiap 10 detik
            setTimeout(() => {
                if (particle && particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 10000);
        }

        // buat particle menjadi banyak
        for (let i = 0; i < 35; i++) {
            setTimeout(() => createParticle(), i * 100);
        }

        // buat particle lebih sering muncul
        setInterval(() => {
            const particleCount = Math.floor(Math.random() * 5) + 5;
            for (let i = 0; i < particleCount; i++) {
                setTimeout(() => createParticle(), i * 200);
            }
        }, 1500);

        // scroll smooth buat navigasi
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // scroll reveal animasi
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0s';
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // animasi buat element
        document.querySelectorAll('.fade-in, .fade-in-delayed, .fade-in-slow, .popup-card').forEach(el => {
            observer.observe(el);
        });

