//assign person1 as object
let person1 = {
  //assign name property
  name: "Noreen",
  //assign sayHello function
  sayHello() {
    console.log(`Hello! My name is ${this.name}`);
  },
};
//assign person2 as object
let person2 = {
  //assign name property
  name: "Shannon",
  //assign sayHello function
  sayHello() {
    console.log(`Hello! My name is ${this.name}`);
  },
};
//assign person3 as object
let person3 = {
  //assign name property
  name: "Anne",
  //assign sayHello function
  sayHello() {
    console.log(`Hello! My name is ${this.name}`);
  },
};
//assign person4 as object
let person4 = {
  //assign name property
  name: "Mickey",
  //assign sayHello function
  sayHello() {
    console.log(`Hello! My name is ${this.name}`);
  },
};
//assign person5 as object
let person5 = {
  //assign name property
  name: "Laura",
  //assign sayHello function
  sayHello() {
    console.log(`Hello! My name is ${this.name}`);
  },
};
//call person1 sayHello function
person1.sayHello();
//call person2 sayHello function
person2.sayHello();
//call person3 sayHello function
person3.sayHello();
//call person4 sayHello function
person4.sayHello();
//call person5 sayHello function
person5.sayHello();
//assign Person as Pseudo Class with 3 constructors
function Person(name, city, age) {
  //name property
  this.name = name;
  //city property
  this.city = city;
  //age property
  this.age = age;
}
//create sayHello function for Person
Person.prototype.sayHello = () =>
  console.log(`Hey! My name is ${name}, I am ${age}, and live in ${city}`);
