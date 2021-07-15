const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
    
        createUserCard(data);

    } catch(err) {
        console.log(err);
    }
}

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers} <strong>followers</strong></li>
                    <li>${user.following} <strong>following</strong></li>
                    <li>${user.public_repos} <strong>repos</strong></li>
                </ul>
                <div id="repos">
                    <a href="" class="repo">Repo1</a>
                    <a href="" class="repo">Repo2</a>
                    <a href="" class="repo">Repo3</a>
                    <a href="" class="repo">Repo4</a>
                    <a href="" class="repo">Repo5</a>
                </div>
            </div>
        </div>
    `

    main.innerHTML = cardHTML;

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const user = search.value;

    if (user) {
        getUser(user);

        search.value = '';
    }
})