const hisnom = "Emeka";

function myName() {
  console.log(hisnom);
  console.log(hisnom);
  console.log(hisnom);
  console.log(hisnom);
}
myName();

//create a function for addition
function total(num1, num2) {
  console.log(num1 + num2);
}

total(173, 214);

//change text to Uppercase using a function
function toUpper(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}

toUpper(hisnom);

//add two strings
var string1 = "my name is Elo ";
var string2 = "and yours is Amaka";

function addText(x, y) {
  const addedText = x + y;
  console.log(addedText);
}
addText(string1, string2);
