document.addEventListener('DOMContentLoaded', function() {
    const cookie = document.getElementById('cookie');
    const clickCounter = document.getElementById('clicker__counter');
    let clickCount = 0;
    let lastClickTime = null;
    let isBig = true;
    
    const speedInfo = document.createElement('div');
    speedInfo.className = 'clicker__speed-info';
    speedInfo.innerHTML = 'Скорость клика: <span id="clicker__speed">0</span> кликов/сек';
    document.querySelector('.clicker__status').appendChild(speedInfo);
    const speedElement = document.getElementById('clicker__speed');
    
    cookie.addEventListener('click', function() {
        clickCount++;
        clickCounter.textContent = clickCount;
        
        if (isBig) {
            cookie.width = 180;
            cookie.height = 180;
        } else {
            cookie.width = 200;
            cookie.height = 200;
        }
        isBig = !isBig;
        
        const now = Date.now();
        if (lastClickTime) {
            const timeDiff = (now - lastClickTime) / 1000; 
            const clicksPerSecond = 1 / timeDiff;
            speedElement.textContent = clicksPerSecond.toFixed(2);
        }
        lastClickTime = now;
    });
});