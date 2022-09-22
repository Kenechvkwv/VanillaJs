//Objects and This keyword

const user = {
  name: "Emeka",
  age: 24,
  married: false,
  purchases: ["phone", "car", "laptop"],

  sayName: function () {
    console.log(this.name);
    console.log(this.married);
    console.log(this.purchases);
    console.log(this.age);
  },
};

// console.log(user.purchases);
// console.log(this);

user.sayName();

//create a function for addition ES6
let add = (num1, num2) => {
  console.log(num1 + num2);
};

add(6, 6);
