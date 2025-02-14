document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').textContent = "Yay! You made me the happiest! 💖";
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

document.getElementById('noBtn').addEventListener('click', function() {
    // Make it impossible to click "No" by moving it again
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});