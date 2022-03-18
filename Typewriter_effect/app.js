/* 
const txt1 = document.getElementById('text1');
const expText = "Hello world";

let index = 1;
let extra = "-";

setInterval(writeText, 100);
function writeText(){
    txt1.innerText = expText.slice(0,index);
    index++;
    if (index > expText.length){
        index = 1;
    }

} */

const text2 = document.getElementById('text2');
const mainText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus euismod dolor, at placerat ante interdum sit amet. Nam sapien tortor, porttitor non posuere vitae, consequat sit amet dui. Aenean eleifend sollicitudin lacus.";

let i = 1;

const writetxt = setInterval(writeText, 50);
function writeText(){
    // Set text with slice and plus i
    text2.innerText = mainText.slice(0, i);
    i++;
    if(i > mainText.length){
        // Set i 
        i = 1;
        // After Text stop text on display
        clearInterval(writetxt);
    }
}