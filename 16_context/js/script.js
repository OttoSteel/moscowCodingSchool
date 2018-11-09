/*console.log(this);

window.onscroll = function(){console.log(this)}

const button = document.querySelector('button');

button.onclick = function() {
	this.innerHTML = 'Pressed';
}
*/
const button = document.querySelector('button');

// У стрелочной функции ВСЕГДА ГЛОБАЛЬНЫЙ КОНТЕКСТ
button.onclick = () => {
	console.log(this);
}
