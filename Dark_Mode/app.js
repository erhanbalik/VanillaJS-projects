const openMenu = document.querySelector('.open-menu');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const navMenu = document.querySelector('.nav-container');
/* Dark Mode DOM */
const modeText = document.querySelector('.mode-text');
const lightBtn = document.querySelector('.light-mode');
const darkBtn = document.querySelector('.dark-mode');
const modeBtn = document.querySelector('mode-container');
const footer = document.getElementById('footer');
const footerItems = document.querySelectorAll('.footer-item');
let isDark = false;


/* Menu Slider */
openMenu.addEventListener('click', () => {
    line1.classList.toggle('l-1');
    line2.classList.toggle('l-2');
    line3.classList.toggle('l-3');
    navMenu.classList.toggle('nav-container-show');
});

darkBtn.addEventListener('click', () => {
    lightBtn.classList.toggle('light-mode-hide');
    darkBtn.classList.toggle('dark-mode-show');
    modeText.textContent ='Light';
    lightMode();
})
lightBtn.addEventListener('click', () => {
    darkBtn.classList.toggle('dark-mode-show');
    lightBtn.classList.toggle('light-mode-hide');
    modeText.textContent ='Dark';
    darkMode();
})

// Dark Mode
    let head = document.body;
    let navLine = document.querySelectorAll("#line");
function darkMode () {
    head.style.backgroundColor = 'black';
    modeText.style.color = 'whitesmoke';
    darkBtn.style.color = 'whitesmoke';
    footer.style.backgroundColor = 'black';
    for (let i = 0; i < navLine.length; i++){
        navLine.item(i).style.backgroundColor = 'whitesmoke';
    }
    for (let i = 0; i < footerItems.length; i++){
        footerItems.item(i).style.color = 'whitesmoke';
    }
}
// Light Mode
function lightMode (){
    head.style.backgroundColor = 'whitesmoke';
    modeText.style.color = 'black';
    darkBtn.style.color = 'black';
    footer.style.backgroundColor = 'whitesmoke';
    for (let i = 0; i < navLine.length; i++){
        navLine.item(i).style.backgroundColor = 'black';
    }
    for (let i = 0; i < footerItems.length; i++){
        footerItems.item(i).style.color = 'black';
    }
}
