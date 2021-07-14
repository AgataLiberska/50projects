const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
        toasts.removeChild(notif)
    }, 3000)
}

button.addEventListener('click', () => createNotification())