let Shuffle = require('shufflejs').default;
let container = document.querySelector('.project-container');
let allBtn = document.getElementById('all-filter');
let cssBtn = document.getElementById('css-filter');
let vueBtn = document.getElementById('vue-filter');
let javascriptBtn = document.getElementById('javascript-filter');


let shuffleInstance = new Shuffle(container)
allBtn.addEventListener('click', e => {
    shuffleInstance.filter(Shuffle.ALL_ITEMS)
})
javascriptBtn.addEventListener('click', e => {
    shuffleInstance.filter(['javascript'])
})
cssBtn.addEventListener('click', e => {
    shuffleInstance.filter(['css'])
})
vueBtn.addEventListener('click', e => {
    shuffleInstance.filter(['vue'])
})