document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.getElementById('timer');
    let totalSeconds = parseInt(timerElement.textContent) || 59;

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            secs.toString().padStart(2, '0')
        ].join(':');
    }

    const timerId = setInterval(() => {
        totalSeconds--;
        timerElement.textContent = formatTime(totalSeconds);

        if (totalSeconds <= 0) {
            clearInterval(timerId);
            alert('Вы победили в конкурсе!');
        }
    }, 1000);
});