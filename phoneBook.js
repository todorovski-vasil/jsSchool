var phoneBook = [];

phoneBook.push({
	name: 'Vasil',
	surname: 'Todorovski',
	phone: '+38970555345',
	address: 'Adresa 1'
});

phoneBook.push({
	name: 'Dimo',
	surname: 'Slavkov',
	phone: '+38970555123',
	address: 'Adresa 2'
});

phoneBook.push({
	name: 'Sasko',
	surname: 'Janev',
	phone: '+38970555003',
	address: 'Adresa 3'
});

var table = document.getElementById('phoneBookTable');

var buttonAdd = document.getElementById('add');
buttonAdd.addEventListener('click', appendRecord);

createTableBody();

function createTableBody() {
	var size = phoneBook.length;
	var tbody = document.createElement('tbody');
	table.appendChild(tbody);
	// table.getElementsByTagName('tbody')[0];

	for(var i=0; i<size; i++) {
		var row = tbody.insertRow(i);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);
		var cell4 = row.insertCell(4);

		cell0.innerHTML = phoneBook[i].name;
		cell1.innerHTML = phoneBook[i].surname;
		cell2.innerHTML = phoneBook[i].phone;
		cell3.innerHTML = phoneBook[i].address;

		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = 'checkbox' + i.toString();
		checkbox.addEventListener('click', checkboxClick);

		phoneBook[i].checked = false;

		cell4.appendChild(checkbox);
	}
}

function checkboxClick(event) {
	var checkbox = event.target;
	if (checkbox.checked) {
		var num = checkbox.id.slice(8);
		phoneBook[num].checked = true;
	}
}

function deleteSelectedRecords() {
	// phoneBook = phoneBook.map(function(record) {
	// 	if(!record.checked)
	// 		return record;
	// });

	var count = phoneBook.length;

	for(var i=0; i<count; i++){
		if (phoneBook[i].checked){
			phoneBook.splice(i, 1);
			i--;
			count--;
		}
	}

	redrawTable();
}

function appendRecord() {
	var name = document.getElementById('name');
	var surname = document.getElementById('surname');
	var phone = document.getElementById('phone');
	var address = document.getElementById('address');

	do {
		if (name.value == '')
			break;
		if (surname.value == '')
			break;
		if (phone.value == '')
			break;
		if (address.value == '')
			break;

		phoneBook.push({
			name: name.value,
			surname: surname.value,
			phone: phone.value,
			address: address.value
		});

		redrawTable();

	}while(false)
}

function redrawTable() {
	table.getElementsByTagName('tbody')[0].remove();
	createTableBody();
}
