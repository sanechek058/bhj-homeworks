document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');
    
    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        return (
            rect.top < windowHeight && 
            rect.bottom > 0
        );
    }
    
    function handleScroll() {
        revealElements.forEach(element => {
            if (element.classList.contains('reveal_active')) {
                return;
            }
            
            if (isElementVisible(element)) {
                element.classList.add('reveal_active');
            }
        });
    }
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
});