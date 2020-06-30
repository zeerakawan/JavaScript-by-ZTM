/*var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	var but = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(document.createElement("button"));
	//ul.appendChild(but);
	ul.appendChild(li);
	input.value = "";
}

function addListElementByClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}	

function addListElementByKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}
button.addEventListener("click", addListElementByClick);

input.addEventListener("keypress", addListElementByKeypress);

