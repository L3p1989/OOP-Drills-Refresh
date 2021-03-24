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
Person.prototype.sayHello = function () {
  console.log(
    `Hey! My name is ${this.name}, I am ${this.age}, and live in ${this.city}`
  );
};
//assign friend1 as new Person
const friend1 = new Person("Noreen", "Chandler", 50);
//assign friend2 as new Person
const friend2 = new Person("Shannon", "Denver", 36);
//assign friend3 as new Person
const friend3 = new Person("Anne", "Parker", 45);
//assign friend4 as new Person
const friend4 = new Person("Mickey", "Bailey", 48);
//assign friend5 as new Person
const friend5 = new Person("Laura", "Lakewood", 52);
//call friend1 sayHello function
friend1.sayHello();
//call friend2 sayHello function
friend2.sayHello();
//call friend3 sayHello function
friend3.sayHello();
//call friend4 sayHello function
friend4.sayHello();
//call friend5 sayHello function
friend5.sayHello();
