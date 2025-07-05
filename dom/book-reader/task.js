document.addEventListener('DOMContentLoaded', function() {
    const bookElement = document.getElementById('book');
    const fontSizeControls = document.querySelector('.book__control_font-size');
    const fontSizeButtons = fontSizeControls.querySelectorAll('.font-size');
    
    fontSizeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            fontSizeButtons.forEach(btn => btn.classList.remove('font-size_active'));
            
            this.classList.add('font-size_active');
            
            bookElement.classList.remove('book_fs-small', 'book_fs-big');
            
            const size = this.dataset.size;
            if (size === 'small') {
                bookElement.classList.add('book_fs-small');
            } else if (size === 'big') {
                bookElement.classList.add('book_fs-big');
            }
        });
    });
});