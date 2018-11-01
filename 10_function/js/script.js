console.log('You are at ' + window.location);

function sayHi() {
	return 'Hello, amigo!'
}

console.log(sayHi());
document.body.innerHTML = sayHi();

function sayName(name) {
	return 'Hello, ' + name;
}