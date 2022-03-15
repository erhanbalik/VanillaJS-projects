
// Call DOM
const btnJoke = document.querySelector('.btn-joke');
const txtJoke = document.querySelector('.text');

btnJoke.addEventListener('click', () => {
    // Api URL
    const api = 'https://sv443.net/jokeapi/v2/joke/Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=&type=single';

    //Call API
    fetch (api)
    .then(response => {
        return response.json();
    })
    .then (data => {
        txtJoke.textContent = data.joke;
    })
});

