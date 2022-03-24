// Call DOM
const inputArea = document.querySelector('.inputArea');
const searchBtn = document.querySelector('.btn-search');


const card = document.querySelector('.section-item');
const listItems = [];

let ready = false;

inputArea.addEventListener('input', (e) => filterData(e.target.value));
getData();
    // !Get data and overwrite
async function getData() {
    
    // API Url
    const res = await fetch('https://dog.ceo/api/breeds/image/random/50') ;

    const {message} = await res.json();

    card.innerHTML = '';

    message.forEach(img => {

        const div = document.createElement('div');

        listItems.push(div);
        
        div.innerHTML = `
        <div class="card">
        <p class = "card-title"></p>
        <img src = "${img}" class= "card-img">
        <div class="btn-container">
            <button class="reaction card-like">like</button>
            <button class="reaction card-unlike">dislike</button>
        </div>
        </div>`;

        card.appendChild(div);
    })
    
}

// !Filter Data

function filterData (searchTerm){
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('section-item-hide');
        }
        else {
            item.classList.add('section-item-hide');
        }
    })
}
console.log(listItems);