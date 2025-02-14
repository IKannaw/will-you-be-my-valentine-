// Show dialog and start falling balls animation
document.getElementById('yesBtn').addEventListener('click', function() {
    const dialog = document.getElementById('dialog');
    dialog.style.display = 'block';

    // Create falling balls
    createFallingBalls();
});

// Close dialog
document.getElementById('closeDialog').addEventListener('click', function() {
    const dialog = document.getElementById('dialog');
    dialog.style.display = 'none';
});

// Function to create falling balls
function createFallingBalls() {
    const ballContainer = document.getElementById('ballContainer');

    for (let i = 0; i < 50; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        ball.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random fall speed
        ball.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`; // Random color
        ballContainer.appendChild(ball);

        // Remove balls after they fall
        ball.addEventListener('animationend', () => {
            ball.remove();
        });
    }
}

// "No" button behavior
document.getElementById('noBtn').addEventListener('mouseover', function() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

document.getElementById('noBtn').addEventListener('click', function() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});