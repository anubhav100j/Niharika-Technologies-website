document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particleContainer = document.querySelector('.particles');
    if (!particleContainer) return;

    const numParticles = 150; // Increased particle count for a fuller effect
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

    // Animate particles
    anime({
        targets: particles,
        translateX: () => anime.random(-50, 50),
        translateY: () => anime.random(-50, 50),
        scale: [
            { value: () => anime.random(0.1, 0.5), duration: 0 },
            { value: () => anime.random(0.5, 1.2), duration: () => anime.random(1000, 3000) },
            { value: 0, duration: () => anime.random(1000, 3000) }
        ],
        opacity: [
            { value: 0, duration: 0 },
            { value: () => anime.random(0.2, 0.8), duration: () => anime.random(1000, 2000) },
            { value: 0, duration: () => anime.random(1000, 2000) }
        ],
        duration: () => anime.random(4000, 8000),
        delay: anime.stagger(20),
        loop: true,
        easing: 'linear',
        direction: 'alternate'
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