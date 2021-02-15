const colors = ["green", "red", "rgba(133,122,200)", "#f15025","white","grey","purple","tomato","goldenrod","black"];
const btn =document.getElementById('btn');
const clrText = document.querySelector('.color');

btn.addEventListener('click',() =>{
const randomIndex = getRandomClr();
 document.body.style.backgroundColor = colors[randomIndex];
 clrText.textContent = colors[randomIndex];
})

const getRandomClr = () => {
 const index = Math.floor(Math.random()*colors.length);
 return index;
}
