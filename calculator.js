var newOperation = true;
var oldValue = 0;
var selectedOperator = '';
var commaExists = false;

// document.getElementById('key1').addEventListener('click', function(){ onKeyDigit('1'); });
// document.getElementById('key2').addEventListener('click', function(){ onKeyDigit('2'); });
// document.getElementById('key3').addEventListener('click', function(){ onKeyDigit('3'); });
// document.getElementById('key4').addEventListener('click', function(){ onKeyDigit('4'); });
// document.getElementById('key5').addEventListener('click', function(){ onKeyDigit('5'); });
// document.getElementById('key6').addEventListener('click', function(){ onKeyDigit('6'); });
// document.getElementById('key7').addEventListener('click', function(){ onKeyDigit('7'); });
// document.getElementById('key8').addEventListener('click', function(){ onKeyDigit('8'); });
// document.getElementById('key9').addEventListener('click', function(){ onKeyDigit('9'); });
// document.getElementById('key0').addEventListener('click', function(){ onKeyDigit('0'); });
for (var i=0; i<10; i++) {
	document.getElementById('key' + i).addEventListener('click', function(event){
		onKeyDigit(event.currentTarget.id.slice(3,4));
	});
}

document.getElementById('key.').addEventListener('click', onKeyComma);
document.getElementById('key+').addEventListener('click', function(){ onKeyOperator('+'); });
document.getElementById('key-').addEventListener('click', function(){ onKeyOperator('-'); });
document.getElementById('key*').addEventListener('click', function(){ onKeyOperator('*'); });
document.getElementById('key/').addEventListener('click', function(){ onKeyOperator('/'); });
document.getElementById('keyC').addEventListener('click', onKeyC);

// for(var i=0; i<10; i++){
// 	var id = 'key' + i.toString();
//
// 	document.getElementById(id).addEventListener('mousedown', function(event){
// 		event.currentTarget.style.backgroundColor = 'green'; });
//
// 	document.getElementById(id).addEventListener('mouseup', function(event){
// 		event.currentTarget.style.backgroundColor = 'grey'; });
// }
// document.getElementById('key1').addEventListener('mousedown', function(){
// 	document.getElementById('key1').style.backgroundColor = 'green'; });

function onKeyDigit(digit) {
	var screen = document.getElementById('calcScreen');

	if (newOperation) {
		newOperation = false;
		oldValue = parseFloat(screen.value);
		screen.value = digit;
	} else {
		screen.value = screen.value + digit;
	}
}

function onKeyComma() {
	if(!commaExists) {
		commaExists = true;

		if (newOperation)
			onKeyDigit('0');

		onKeyDigit('.');
	}
}

function onKeyOperator(operator) {
	if(!newOperation) {
		var screen = document.getElementById('calcScreen');

		switch(selectedOperator) {
			case '':
				break;
			case '+':
				screen.value = (oldValue + parseFloat(screen.value)).toString();
				break;
			case '-':
				screen.value = (oldValue - parseFloat(screen.value)).toString();
				break;
			case '/':
				screen.value = (oldValue / parseFloat(screen.value)).toString();
				break;
			case '*':
				screen.value = (oldValue * parseFloat(screen.value)).toString();
				break;
		}

		oldValue = screen.value;
		newOperation = true;
		commaExists = false;
	}
	selectedOperator = operator;
}

function onKeyC() {
	document.getElementById('calcScreen').value = '0';
	newOperation = true;
	oldValue = 0;
	selectedOperator = '';
	commaExists = false;
}
