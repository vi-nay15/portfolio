document.addEventListener('DOMContentLoaded', () => {

    const activePanels = document.querySelectorAll('.reveal');
    const progressBar = document.getElementById('scroll-progress');
    const cursorGlow = document.querySelector('.cursor-glow');

    const evalScrollEntrance = () => {
        const thresholdLine = window.innerHeight * 0.86;

        activePanels.forEach(panel => {
            const coordinateTop = panel.getBoundingClientRect().top;

            if (coordinateTop < thresholdLine) {
                panel.classList.add('active');
            }
        });
    };

    const updateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        progressBar.style.width = scrollPercent + '%';
    };

    const moveCursorGlow = (event) => {
        if (!cursorGlow) return;

        cursorGlow.style.left = event.clientX + 'px';
        cursorGlow.style.top = event.clientY + 'px';
    };

    document.addEventListener('mousemove', moveCursorGlow);
    window.addEventListener('scroll', () => {
        evalScrollEntrance();
        updateScrollProgress();
    });

    evalScrollEntrance();
    updateScrollProgress();
});