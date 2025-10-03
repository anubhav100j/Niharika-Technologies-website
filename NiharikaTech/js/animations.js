document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particleContainer = document.querySelector('.particles');
    if (!particleContainer) return;

    const numParticles = 100;
    const particles = [];

    // Create particles
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particleContainer.appendChild(particle);
        particles.push(particle);
    }

    const mouse = { x: null, y: null };

    // Track mouse movement
    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    // Animate particles
    anime({
        targets: particles,
        translateX: (p, i) => {
            const initialX = p.getBoundingClientRect().left;
            const mouseFactor = mouse.x ? (initialX - mouse.x) * 0.1 : 0;
            return anime.random(-100, 100) + mouseFactor;
        },
        translateY: (p, i) => {
            const initialY = p.getBoundingClientRect().top;
            const mouseFactor = mouse.y ? (initialY - mouse.y) * 0.1 : 0;
            return anime.random(-100, 100) + mouseFactor;
        },
        scale: [
            { value: () => anime.random(0.5, 1.5), duration: () => anime.random(500, 1500) },
            { value: 0, duration: () => anime.random(500, 1500) }
        ],
        opacity: [
            { value: () => anime.random(0.2, 0.7), duration: () => anime.random(500, 1500) },
            { value: 0, duration: () => anime.random(500, 1500) }
        ],
        duration: () => anime.random(2000, 4000),
        delay: anime.stagger(15),
        loop: true,
        easing: 'easeOutExpo',
        direction: 'alternate',
        update: function(anim) {
            // On each frame, re-calculate the translation based on the current mouse position
            anim.animations.forEach(animation => {
                if (animation.property === 'translateX') {
                    const initialX = animation.target.getBoundingClientRect().left;
                    const mouseFactor = mouse.x ? (initialX - mouse.x) * 0.1 : 0;
                    animation.tweens[0].to.numbers[0] = anime.random(-100, 100) + mouseFactor;
                }
                if (animation.property === 'translateY') {
                    const initialY = animation.target.getBoundingClientRect().top;
                    const mouseFactor = mouse.y ? (initialY - mouse.y) * 0.1 : 0;
                    animation.tweens[0].to.numbers[0] = anime.random(-100, 100) + mouseFactor;
                }
            });
        }
    });

    // Animate shapes (existing animation)
    anime({
        targets: '.shape',
        translateX: () => anime.random(-50, 50) + 'vw',
        translateY: () => anime.random(-50, 50) + 'vh',
        rotate: () => anime.random(-180, 180),
        scale: () => anime.random(0.2, 1.2),
        opacity: () => anime.random(0.1, 0.3),
        duration: () => anime.random(2000, 4000),
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
});