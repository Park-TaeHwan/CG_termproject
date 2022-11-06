window.onload = function() {
    
    const scene = document.getElementById('scene');
    const circle = document.getElementById('circle');
    const date = new Date;
    
    function genRandNumber(min, max) {
        const num = Math.floor(Math.random() * max - min).toFixed().toString();
        return num;
    };
    
    function createDaySky() {
        // Change background color
        document.body.classList.add('day');
    
        // Create sun
        circle.classList.add('sun');
    
        for (let i = 1; i < 4; i++) {
            const cloud = document.createElement('span');
            cloud.classList.add('cloud', `x${i}`);
            scene.appendChild(cloud);
        };
    };

    function createDaySunset() {
        // Change background color
        document.body.classList.add('Sunset');
    
        // Create sun
        circle.classList.add('sun');
    
        for (let i = 1; i < 4; i++) {
            const cloud = document.createElement('span');
            cloud.classList.add('cloud', `x${i}`);
            scene.appendChild(cloud);
        };
    };
    
    function createNightSky() {
        // Change background color
        document.body.classList.add('night');
    
        // Create moon
        circle.classList.add('moon');
    
        // Create stars
        for (let i = 0; i < 150; i++) {
            const posX = genRandNumber(2, document.body.clientWidth);
            const posY = genRandNumber(2, document.body.clientHeight);
    
            const star = document.createElement('span');
            star.classList.add('star');
            star.style.top = `${posY}px`;
            star.style.left = `${posX}px`;
            scene.appendChild(star);
        };
    };
    
    function formatTime() {
        const d = new Date;
    
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
    
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        const timeStr = `${hours} : ${minutes} : ${seconds} ${ampm}`;
    
        return timeStr;
    };
    
    function updateTime() {
        const timeDisplay = document.getElementById('timeDisplay');
        timeDisplay.textContent = formatTime();
    };
    
    if (date.getHours() < 17) {
        createDaySky();
    } else if (date.getHours() < 20) {
        createDaySunset();
    }
    else {
        createNightSky();
    };
    
    updateTime();
    setInterval(updateTime, 1000);
} 