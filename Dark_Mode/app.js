const openMenu = document.querySelector('.open-menu');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const navMenu = document.querySelector('.nav-container');
/* Dark Mode DOM */
const modeText = document.querySelector('.mode-text');
const modeBtn = document.querySelector('.mode-switch');
const modeIcon = document.querySelector('.fa-sun');
let isDark = true;
let isLight = true;

/* Menu Slider */
openMenu.addEventListener('click', () => {
    line1.classList.toggle('l-1');
    line2.classList.toggle('l-2');
    line3.classList.toggle('l-3');
    navMenu.classList.toggle('nav-container-show');
});

modeBtn.addEventListener('click', () => {
    switchTheme();
})

// Dark Mode
function darkMode () {
    modeIcon.classList.replace('fa-sun', 'fa-moon');
    modeText.textContent = "Dark";
}
// Light Mode
function lightMode (){
    modeIcon.classList.replace('fa-moon', 'fa-sun');
    modeText.textContent = "Light";
}

// Switch Theme
function switchTheme (){
    if (isDark === true){
        darkMode();

    } else if(isLight === true){
        lightMode();
    }
}
