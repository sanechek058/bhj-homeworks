document.addEventListener('DOMContentLoaded', function() {
    function initRotator(rotator) {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = Array.from(cases).findIndex(c => c.classList.contains('rotator__case_active'));
        let timer = null;
        
        if (currentIndex === -1) {
            currentIndex = 0;
            cases[currentIndex].classList.add('rotator__case_active');
        }
        
        function rotate() {
            cases[currentIndex].classList.remove('rotator__case_active');
            
            currentIndex = (currentIndex + 1) % cases.length;
            
            const nextCase = cases[currentIndex];
            
            nextCase.classList.add('rotator__case_active');
            
            if (nextCase.dataset.color) {
                nextCase.style.color = nextCase.dataset.color;
            }
            
            const speed = parseInt(nextCase.dataset.speed) || 1000;
            clearTimeout(timer);
            timer = setTimeout(rotate, speed);
        }
        
        const currentCase = cases[currentIndex];
        if (currentCase.dataset.color) {
            currentCase.style.color = currentCase.dataset.color;
        }
        
        const initialSpeed = parseInt(currentCase.dataset.speed) || 1000;
        timer = setTimeout(rotate, initialSpeed);
    }
    
    const rotators = document.querySelectorAll('.rotator');
    rotators.forEach(initRotator);
});