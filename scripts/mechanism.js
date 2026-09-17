// If assets/images/jackhammer-mechanism.gif is added later, swap it in for the SVG demo.

document.addEventListener('DOMContentLoaded', function() {
    const stage = document.querySelector('.mechanism-stage');
    const svg = document.querySelector('.jackhammer-svg');

    if (!stage || !svg) {
        return;
    }

    const probe = new Image();
    probe.onload = function() {
        const gif = document.createElement('img');
        gif.src = probe.src;
        gif.alt = 'Jackhammer mechanism animation';
        gif.className = 'mechanism-gif is-loaded';
        svg.replaceWith(gif);
    };
    probe.src = 'assets/images/jackhammer-mechanism.gif';
});
