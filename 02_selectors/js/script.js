console.log('You are at ' + window.location);
const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelector('div');
console.log(allBySelector, firstBySelector);

const quest = prompt('What do you want to write on this page?');

byId.innerHTML = quest;
firstBySelector.innerHTML = "<h2>Hello I am first div selector</h2>";