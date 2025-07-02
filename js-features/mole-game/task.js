(() => {
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');
    
    const getHole = index => document.getElementById(`hole${index}`);
    
    function handleHoleClick(event) {
        const hole = event.target;
        
        if (hole.classList.contains('hole_has-mole')) {
            deadCounter.textContent = parseInt(deadCounter.textContent) + 1;
            
            if (parseInt(deadCounter.textContent) >= 10) {
                alert('Поздравляем! Вы победили!');
                resetGame();
            }
        } else {
            lostCounter.textContent = parseInt(lostCounter.textContent) + 1;
            
            if (parseInt(lostCounter.textContent) >= 5) {
                alert('Игра окончена! Вы проиграли!');
                resetGame();
            }
        }
    }
    
    function resetGame() {
        deadCounter.textContent = '0';
        lostCounter.textContent = '0';
    }
    
    for (let i = 1; i <= 9; i++) {
        const hole = getHole(i);
        hole.addEventListener('click', handleHoleClick);
    }
})();