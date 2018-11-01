var cash = parseFloat(prompt('сколько у вас с собой есть денег'));
var apples = parseFloat(prompt('сколько вы купили яблок'));
var bread = parseFloat(prompt('сколько вы купили батонов хлеба'));
var applePrice = parseFloat(prompt('сколько стоит одно яблоко'));
var breadPrice = parseFloat(prompt('сколько стоит один батон хлеба'));

function haveEnough(cash, apples, bread, applePrice, breadPrice) {
	if ((cash - ((applePrice * apples) + (breadPrice * bread))) >= 0) {
		return 'Вам хватает денег на покупки';
	} else {
		return 'Вам не хватает денег'
	}
}

document.body.innerHTML = haveEnough(cash, apples, bread, applePrice, breadPrice);