const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorText = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click',()=> {
 let hexCode = "#";
 for(let i = 0; i <6; i++){
     hexCode += hex[randomIndex()];
 }
 document.body.style.backgroundColor = hexCode;
 colorText.textContent = hexCode;
})

const randomIndex = () => {
    return Math.floor(Math.random()*hex.length);
}