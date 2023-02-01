const animais = document.getElementById('animais');
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);
const primeiraLi = document.querySelector('li');
console.log(primeiraLi);
const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);
const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);


const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
  console.log(item);  
});

const arrayGrid = Array.from(gridSectionHTML);