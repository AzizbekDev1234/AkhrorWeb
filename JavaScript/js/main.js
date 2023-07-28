// ! TDZ

//! Functions

// ? function declaration
// function saayHello() {
//   console.log("Hello World");
// }
// saayHello();

// ? Function expression

// const val = function goodBye() {
//   console.log("Goodbye World");
// };

// val();

// ? Arrow function
// const goodFunc = () => {
//   console.log("Hello World");
// };
// goodFunc();

// ! Arguments vs Parametr
// const func = (name) => {
//   console.log(`Hello Worl ${name}`);
// };

// func("Azizbek");

// ! return

// const calc = function func(r) {
//   return 2 * 3.14 * r ** 2;
// };

// const result = calc(4);
// console.log(result);

// const area = function res(a) {
//   return result * a;
// };

// const value = area(3);

// console.log(value);

// ! Arrow function

// const calc = (a, b) => {
//   return a * b;
// };

//  const func = calc(3 , 8)

//  console.log(func);

// const calc = (a) => a ** 3;

// const func = calc(3);

// console.log(func);

// const greet = function () {
//   return "Salom Hammaga"
// }

// const greetEl = greet()
// console.log(greetEl)

// const greet = (name) => {
//   return `Salom ${name}`
// }

// const greetEl = greet("Azizbek")
//  console.log(greetEl)

// const soliq = function (max, pros) {
//   const result = 0;
//   for (let i = 0; i < max.length; i++) {
//     result += max[i] + max[i] * pros;
//   }
//   return result;
// };
// const soqqa = soliq([23, 43, 54], 0.2);
// console.log(soqqa);
// const bill = function (products, tax) {
//   const total = 0;

//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };
// const result = bill([19, 12, 32], 0.2);
// console.log(result);
// ! Function vs Methods

// callback
// const func = (callback) => {
//   let num = 39;
//   callback(num);
// };
// func((result) => {
//   console,log(result);
// });
// const myFunc = (callback) => {
//   let number = 32
//   callback(number),
// };

// myFunc((value) => {
//   console.log(value)
// })

// ! forEach
// const names = ["olma", "anor", "gilos", "qovun"];
// const newArrays = []
// names.forEach(function (item) {
//   const newName = item.charAt().toUpperCase() + item.slice(1).toLowerCase() + "bek";
//    newArrays.push(newName)
// });

// console.log(newArrays)

// ! OBJECT
// const users = {
//   name: "Azizbek",
//   number: 930766923,
//   age: 19,
//   lang: "uz",
// };

// console.log(users.lang);

// users.age = 20;
// users.number = 9232323;
// users["name"] = "Aziz"

// console.log(users)

// const obj = {
//   name: "Azizbek",
//   number: 930766923,
//   age: 19,
//   lang: "uz",
//   login: function () {
//     console.log("Hello World");
//   },
//   logout: function () {
//     console.log("Again Again");
//   },
// };

// obj.login();
// obj.logout();
// console.log(obj);
//  !  This keyword
// const obj = {
//   name: "Azizbek",
//   age: 19,
//   email: "as.abduhakimov@gmail.com",
//   hobby: ["feading cats", "DEV", "Watching resl"],
//   login: function () {
//     console.log("Hellooooo");
//   },
//   logout: function () {
//     console.log("bye");
//   },
//   speak: function () {
//     console.log(this);
//     console.log("My hobby is :")
//     this.hobby.forEach((item) => {
//       console.log(item)
//     })
//   },
// };

// console.log(obj)

// ! Arrayda object

// const obj = [
//   { name: "Avatar", like: 290 },
//   { name: "Avatar", like: 290 },
//   { name: "Avatar", like: 290 },
//   { name: "Avatar", like: 290 },
//   { name: "Avatar", like: 290 },
// ];

// obj.forEach((item) => {
//   console.log(item.name);
// });

// ! Math object

// let num = 12.12341;
// Math.round()
// console.log(Math.raund(num));
// let colorOne = "Oq";
// let colorTwo = "Qora";
// let newColor = colorOne
// colorOne = colorTwo
// colorTwo = newColor
// console.log(colorOne)
// console.log(colorTwo)

// let numOne = 12;
// let numTwo = 2;

// if (numOne > numTwo) {
//   console.log("Bir katta");
// } else {
//   console.log("Siuuu");
// }

// function num(a, b) {
//   let bigNum = (a > b) ? a : b;
//   return bigNum
// }

// console.log(num(3, 4))

// ! FizzBuzz
// function fizzBuzz(num) {
//   switch (true) {
//     case num % 3 === 0:
//       return "Fizz";
//   }
// }

// console.log(fizzBuzz(12));

// ! textContent vs innerHTML

// const listEl = document.querySelectorAll("#list");

// listEl.forEach((item) => {
//   item.textContent += " darslari";
// });
const oderEl = document.querySelector("#oder");

const arr = ["Aziz", "Olam", "Tarvuz"];

arr.forEach((name) => {
  oderEl.innerHTML += `<li>${name}</li>`;
});
