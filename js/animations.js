document.addEventListener('DOMContentLoaded', function() {

    // Animate shapes
    anime({
        targets: '.shape',
        translateX: () => anime.random(-100, 100) + 'vw',
        translateY: () => anime.random(-100, 100) + 'vh',
        rotate: () => anime.random(0, 360),
        scale: () => anime.random(0.1, 1),
        opacity: () => anime.random(0.1, 0.5),
        duration: () => anime.random(1000, 3000),
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });

    // Animate particles
    anime({
        targets: '.particle',
        translateX: function() {
            return anime.random(-100, 100) + 'vw';
        },
        translateY: function() {
            return anime.random(-100, 100) + 'vh';
        },
        scale: [
            {value: 0.1, duration: 0},
            {value: 1, duration: 1000},
            {value: 0.1, duration: 1000}
        ],
        opacity: [
            {value: 0, duration: 0},
            {value: 1, duration: 1000},
            {value: 0, duration: 1000}
        ],
        delay: anime.stagger(100),
        duration: 2000,
        loop: true,
        easing: 'linear'
    });

});