const text = document.querySelector(".title");
const color = document.querySelector(".changeColor");
const listInput = document.querySelectorAll(".list-input");
//style Text using js
// text.style.color = "red";
// text.style.background = "blue";
// text.style.padding = "50px";
// text.style.borderRadius = "50px";
// text.style.textAlign = "center";

//style Button using js
// color.style.backgroundColor = "green";
// color.style.padding = "10px";
// color.style.borderRadius = "10px";
color.style.fontSize = "30px";

//gives the text the class properties of "changeColor"
// text.classList.add("changeColor");

//using eventlisteners
color.addEventListener("click", function () {
  text.classList.toggle("changeColor");
  color.classList.toggle("col");
});

const userList = document.querySelectorAll(".namelist li");

console.log(userList);

for (user of userList) {
  user.addEventListener("click", function () {
    this.style.color = "red";
  });
}
