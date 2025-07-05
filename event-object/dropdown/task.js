document.addEventListener('DOMContentLoaded', () => {
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown__list').forEach(list => {
            list.classList.remove('dropdown__list_active');
        });
    }

    document.addEventListener('click', event => {
        const dropdown = event.target.closest('.dropdown');
        const isValueClick = event.target.classList.contains('dropdown__value');
        const isLinkClick = event.target.classList.contains('dropdown__link');
        
        if (!dropdown) {
            closeAllDropdowns();
            return;
        }
        
        if (isValueClick) {
            const list = dropdown.querySelector('.dropdown__list');
            const isActive = list.classList.contains('dropdown__list_active');
            
            closeAllDropdowns();
            
            if (!isActive) {
                list.classList.add('dropdown__list_active');
            }
        }
        
        if (isLinkClick) {
            event.preventDefault();
            
            const valueElement = dropdown.querySelector('.dropdown__value');
            valueElement.textContent = event.target.textContent;
            
            closeAllDropdowns();
        }
    });
});