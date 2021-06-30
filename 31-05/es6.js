// arr = [{
//         firstName: "Bharat",
//         lastName: "Rathore",
//         dateOfBirth: new Date(2002, 10, 2)
//     },
//     {
//         firstName: "Harshvardhan",
//         lastName: "Daga",
//         dateOfBirth: new Date(2001, 08, 24)
//     }
// ];

// console.log(arr[0].dateOfBirth.getFullYear());

// var count = 0;

// for (let x in arr) {
//     let presentDate = new Date();
//     if (presentDate.getFullYear() - arr[x].dateOfBirth.getFullYear() <= 20) {
//         count++;
//     }
// }
// console.log(count);

//Promises

// const myPromise = new Promise((myResolve, myReject) => {
//     const a = 3;
//     const b = 5;
//     const product = a * b;
//     if (product > a * a) {
//         myReject("Promise Rejected!");
//     } else {
//         myResolve("Promise Resolved!");
//     }
// });

// myPromise
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     })


//spread and rest

// let details = [{
//         firstName: "Harshvardhan",
//         lastName: "Rathore",
//         age: 16
//     },
//     {
//         firstName: "Bharat",
//         lastName: "Daga",
//         age: 19
//     },
//     {
//         firstName: "Abhilakshya",
//         lastName: "Mehta",
//         age: 20
//     }
// ];

// let arrs = (inputs) => {
//     for (let element of inputs) {
//         let {
//             firstName,
//             lastName,
//             age
//         } = element
//         console.log(age);
//     }
//     return age;
// }

// arrs(details);

let arr = [25, 64, 72, 89, 104];
//Reduce
let arrProduct = arr.reduce((product, current) => product * current);
console.log(arrProduct);
//Map
let arrSq = arr.map(ele => ele * ele);
console.log(arrSq);