// a();
// console.log("Good morning");

// function a() {
//   console.log("hello");
// }

// console.log(b);
// console.log(a);
// console.log(c);
// var b;
// let c;
// var a = 10;

// function hello() {
//   console.log(b);
//   const a = 10;
//   console.log(a);
//   var b = 50;
// }
// hello();

// function newFun() {
//   console.log("hello world");
// }
// function another() {
//   console.log("Namaste");
// }

// another(newFun());

// function myFun() {
//   setTimeout(() => {
//     console.log("hello");
//   }, 3000);
// }
// myFun();

// const myPromise = new Promise(function (resolve, reject) {
//   var a = 12;
//   var b = 12;
//   if (a === b) {
//     console.log("equal");
//     resolve();
//   } else {
//     console.log("not equla");
//     reject();
//   }
// });

// myPromise
//   .then(function () {
//     console.log("Resolved state");
//   })
//   .catch(function () {
//     console.log("Rejected state");
//   });

// const myPromise = new Promise(async function (resolve, reject) {
//   var fun1 = await new Promise((innerResolve) => {
//     setTimeout(() => {
//       const a = 12;
//       innerResolve(a);
//     }, 1000);
//   });

//   var fun2 = await new Promise((innerResolve) => {
//     setTimeout(() => {
//       const b = 12;
//       innerResolve(b);
//     }, 5000);
//   });
//   //   fun1();
//   //   fun2();
//   if (fun1 === fun2) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// myPromise
//   .then(() => {
//     console.log("resolved state");
//   })
//   .catch(() => {
//     console.log("rejected state");
//   });

// function myFun() {
//   setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//       console.log("2");
//       setTimeout(() => {
//         console.log("3");
//         setTimeout(() => {
//           console.log("4");
//         }, 4000);
//       }, 3000);
//     }, 2000);
//   }, 1000);
// }
// myFun();

// setInterval(() => {
//   var date = new Date();
//   console.log(date);
// }, 1000);
// setInterval(() => {
//   var date = new Date();
//   console.log(date);
// }, 7000);

// async function getData() {
//   const y = await "Hello world";
//   console.log(y);
// }

// getData();
// console.log("1");
// console.log("2");

// const arr = [1, 2, 3, 5, 6];

// const result = arr.map((acc) => acc * 2);
// console.log(result);

// const arr = [1, 2, 3, 5, 6];

// const result = arr.filter((acc) => acc > 2);
// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6];

// const result = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(result);

let name1 = "Ankitha";

console.log("first name", name1);

name1 = "Shettigar";

console.log("first name", name1);

const x = (a, b) => a + b;
console.log(x(3, 4));
