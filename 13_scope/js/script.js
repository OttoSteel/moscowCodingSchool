console.log('You are at ' + window.location);
var a = 'hi';

function myFunc() {
	a = 'hello'
	return a;
}

console.log(a);
function myFunc2() {
	var b = 3;
	console.log(b);
}
console.log(b); // b is not defined!
myFunc2(); // ok

if (true) {
	let c = 5;
	var d = 6;
}

console.log(c); // ERROR c is "let"
console.log(d); // OK