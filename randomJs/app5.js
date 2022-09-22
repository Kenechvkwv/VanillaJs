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
