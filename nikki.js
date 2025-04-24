const musicControl = document.getElementById('musicControl');
const birthdayMusic = document.getElementById('birthdayMusic');
let musicPlaying = false;

musicControl.addEventListener('click', () => {
    if (musicPlaying) {
        birthdayMusic.pause();
        musicControl.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        birthdayMusic.play();
        musicControl.innerHTML = '<i class="fas fa-pause"></i>';
    }
    musicPlaying = !musicPlaying;
});

// Floating hearts
const heartsContainer = document.getElementById('hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 300);

// Confetti effect
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Start confetti after a delay
setTimeout(() => {
    setInterval(createConfetti, 100);
}, 1000);

// 3D photo effect
const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

card.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});