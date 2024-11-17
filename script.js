const card = document.querySelector('.card');
const audio = document.getElementById('card-audio');
const confettiContainer = document.querySelector('.confetti-container');

function toggleCard(event) {
    event.preventDefault();
    card.classList.toggle('open');

    if (card.classList.contains('open')) {
        audio.play();
        generateConfetti();
    } else {
        audio.pause();
        audio.currentTime = 0;
        confettiContainer.innerHTML = ''; 
    }
}

function generateConfetti() {
    const colors = ['#ff758c', '#fa709a', '#fee140', '#ff9a9e', '#fad0c4'];
    const confettiCount = 30;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiContainer.appendChild(confetti);
    }
}

card.addEventListener('click', toggleCard);
card.addEventListener('touchend', toggleCard);
