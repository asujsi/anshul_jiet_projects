// function reverse(arr, n) {
//     let a;

//     if (n % 2 == 0) {
//         for (i = 0; i < n / 2; i++) {
//             a = arr[i];
//             arr[i] = arr[n - i];
//             arr[n - i] = a;
//         }
//     } else {
//         for (i = 0; i < n / 2; i++) {
//             if (arr[i] === arr[n - i]) {
//                 break;
//             } else {
//                 a = arr[i];
//                 arr[i] = arr[n - i];
//                 arr[n - i] = a;
//             }
//         }
//     }
//     return arr;
// }

// arr1 = [10, 45, 65, 70, 75];
// arr2 = [3, 4, 5, 6, 7, 8];
// console.log(reverse(arr1, 5));
// console.log(reverse(arr2, 6));



//reversing an array using stack
let arr = [23, 56, 78, 94, 102, 256];
let rev = [];


while (arr.length > 0) {
    rev.push(arr.pop());
    console.log(arr);
}
console.log(rev);

//permutation and combination
let factorial = n => {
    let fact = 1;
    for (let i = n; i > 0; i--) {
        fact *= i;
    }
    return fact;
}

let permutation = (n, r) => {
    if (r > n) {
        return 0;
    }
    return factorial(n) / factorial(n - r);
}

let combination = (n, r) => {
    if (r > n) {
        return 0;
    }
    let x = factorial(r) * factorial(n - r);
    return factorial(n) / x;
}

console.log("nPr : " +
    permutation(12, 2));
console.log("nCr : " +
    combination(10, 6));