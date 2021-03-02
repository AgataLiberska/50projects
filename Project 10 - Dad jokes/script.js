const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

getJoke();

async function getJoke() {
    let config = {
        headers: {
            Accept: 'application/json'
        }
    }

    let jokeUrl = 'https://icanhazdadjoke.com'

    let res = await fetch(jokeUrl, config);

    let data = await res.json();

    jokeEl.innerHTML = data.joke;
}

jokeBtn.addEventListener('click', getJoke)