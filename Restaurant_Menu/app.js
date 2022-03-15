// Menu Items 
const menu = [
    {
        id:1,
        title: "Breakfast wrap with chees",
        category:"breakfast",
        price: "$15.90",
        img: "../images/Food/img-3.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:2,
        title: "Meal with Beef",
        category:"lunch",
        price: "$15.90",
        img: "../images/Food/img-3.jpg",
        desc: "Beef roasted with grill"
    },
    {
        id:3,
        title: "Breakfast wrap with chees",
        category:"dinner",
        price: "$25.90",
        img: "../images/Food/img-3.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:4,
        title: "Burrito",
        category:"lunch",
        price: "$15.90",
        img: "../images/Food/img-3.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:5,
        title: "Pasta with Mozeralla",
        category:"dinner",
        price: "$10",
        img: "../images/Food/img-3.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:6,
        title: "Egg and Tea",
        category:"breakfast",
        price: "$20",
        img: "../images/Food/img-3.jpg",
        desc: `Perfect wrap with chees`,
    },
    {
        id:7,
        title: "Pasta with Mozeralla",
        category:"dinner",
        price: "$10",
        img: "../images/Food/img-3.jpg",
        desc: "Perfect wrap with chees"
    },
    {
        id:8,
        title: "Pasta with Mozeralla",
        category:"dinner",
        price: "$10",
        img: "../images/Food/img-3.jpg",
        desc: "Perfect wrap with chees"
    }
];

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const menuList = document.querySelector('.menu-list-items');
const slideBtn = document.querySelector('.slide-btn');
const mainMenu = document.querySelector('.main-menu');
const slideLength = mainMenu.querySelectorAll('article').length;
// Show Menu
const singleItem = document.querySelector('.single-item');
// Buttons
const btns = document.querySelectorAll('.btn');
const count = document.querySelector('.count');
// Order Button
const orderBtn = document.querySelector('.order-btn');
let activeSlideIndex = 0;
//let value = 0; For button

/* ========EVENT Listener========== */
window.addEventListener('DOMContentLoaded', () => displayMenuItems(menu));
openBtn.addEventListener('click', () => openMenu());
closeBtn.addEventListener('click', () => closeMenu());
orderBtn.addEventListener('click', () => orderItem());
slideBtn.addEventListener('click', () => slideMenu('down'));

// Buttons Doesn't work

/* btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        if(styles.contains('minus-btn')){
            value--;
        } else if (styles.contains('plus-btn')){
            value++;
        }
        count.textContent = value;
    })
}); */
/* -----------Functions ------------------- */

function openMenu(){
    openBtn.classList.toggle('open-btn-hide');
    closeBtn.classList.toggle('close-btn-show'); 1
    menuList.classList.toggle('menu-list-items-show');
}
function closeMenu(){
    openBtn.classList.remove('open-btn-hide');
    closeBtn.classList.remove('close-btn-show');
    menuList.classList.remove('menu-list-items-show');
}
function orderItem(){
    orderBtn.classList.toggle('order-basket-close');
}
const slideMenu = (direction) => {
        // Main Menu Height Calculation
    const sliderHeight = mainMenu.clientHeight;

    if (direction === 'down'){
        activeSlideIndex--;

        if(activeSlideIndex < 0){
            activeSlideIndex = slideLength - 1;
        }
    }
    mainMenu.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
}

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        
        return `<div class="single-container">
        <img src=${item.img} alt=${item.title}>
        <div class="item-info-container">
            <div class="item-info">
                <h4 class="item-name">${item.title}
                    <span class="item-price">${item.price}</span>
                </h4>
                <p class="item-desc">${item.desc}</p>
            </div>
            <div class="item-order">
                <button class="minus-btn btn"><i class="fa-solid fa-minus"></i></button>
                <span class="count">0</span>
                <button class="plus-btn btn"><i class="fa-solid fa-plus"></i></button>
                <button class="add-btn btn">Add</button>
            </div>
        </div>
    </div>`;
    });

    displayMenu = displayMenu.join("");
    singleItem.innerHTML = displayMenu;

}

