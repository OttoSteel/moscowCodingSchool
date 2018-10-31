let number = prompt("Enter the number");
number = parseInt(number);
if (number >= 0) {
	console.log(number);
} else if(number < 0) {
	console.log(- number);
}