// ! TDZ

//! Functions

// ? function declaration
function saayHello() {
  console.log("Hello World");
}
saayHello();

// ? Function expression

const val = function goodBye() {
  console.log("Goodbye World");
};

val();

// ? Arrow function
const goodFunc = () => {
  console.log("Hello World");
};
goodFunc();

// ! Arguments vs Parametr
const func = (name) => {
  console.log(`Hello Worl ${name}`);
};

func("Azizbek");

// ! return

const calc = function func(r) {
  return 2 * 3.14 * r ** 2;
};

const result = calc(4);
console.log(result);

const area = function res(a) {
  return result * a;
};

const value = area(3);

console.log(value);
