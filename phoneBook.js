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
table.addEventListener('click', deleteRow);


var size = phoneBook.length;
for(var i=0; i<size; i++) {
	var row = table.insertRow(i+1);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);

	cell1.innerHTML = phoneBook[i].name;
	cell2.innerHTML = phoneBook[i].surname;
	cell3.innerHTML = phoneBook[i].phone;
	cell4.innerHTML = phoneBook[i].address;
}

function deleteRow() {
	var i = 9;
}
