const tagsContainer = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

textarea.focus();

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    // this is required so that we don't get a new element with each character typed
    tagsContainer.innerHTML = '';

    tags.forEach(tag => {
        let span = document.createElement('span');
        span.classList.add('tag');
        span.textContent = tag;
        tagsContainer.appendChild(span);
    })
}

function selectRandom() {
    const times = 30;

    // every 100ms, choose a random tag and then add highlight class
    // after 100ms, remove highlight class (and select a new one)

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlight(randomTag);

        setTimeout(() => {
            removeHighlight(randomTag);
        }, 100)
    }, 100)

    setTimeout( () => {
        clearInterval(interval);
        const randomTag = pickRandomTag();
        highlight(randomTag);
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');

    return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
    tag.classList.add('highlight');
}

function removeHighlight(tag) {
    tag.classList.remove('highlight');
}

textarea.addEventListener('keyup', e => {
    createTags(e.target.value);

    // check if the key is enter, if it is - clear the textarea and then select random tag

    if (e.code === "Enter") {
        setTimeout( () => {
            textarea.value = '';
        }, 100)

        selectRandom();
    }
})