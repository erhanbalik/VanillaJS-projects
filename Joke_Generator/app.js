
// Call DOM
const btnJoke = document.querySelector('.btn-joke');
const txtJoke = document.querySelector('.text');
let i = 1;

btnJoke.addEventListener('click', () => {
    // Api URL
    const api = 'https://sv443.net/jokeapi/v2/joke/Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=&type=single';

    //Call API
    fetch (api)
    .then(response => {
        return response.json();
    })
    .then (data => {
        const textTimer =  setInterval(textJoke, 100);
        
        function textJoke (){
            txtJoke.innerHTML = data.joke.slice(0,i);
            i++;
            if(i > data.joke.length){
                i = 1;
                // Text write finish after stop text
                clearInterval(textTimer);
            }
        }
        
    })
});

