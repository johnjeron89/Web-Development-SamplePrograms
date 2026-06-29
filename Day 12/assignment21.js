//Reverse a Number

// let num = 1234;
// let reverse = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log("Reverse:", reverse);

//Sum of Digits of a Number

// let num = 1234;
// let sum = 0;

// while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }

// console.log("Sum of digits:", sum);

//Check Whether a Number is a Palindrome

// let num = 121;
// let original = num;
// let reverse = 0;

// while (num > 0) {
//     reverse = reverse * 10 + (num % 10);
//     num = Math.floor(num / 10);
// }

// if (original === reverse) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }

//Check Whether a Number is an Armstrong Number

// let num = 153;
// let original = num;
// let sum = 0;

// while (num > 0) {
//     let digit = num % 10;
//     sum += digit ** 3;
//     num = Math.floor(num / 10);
// }
// if (sum === original) {
//     console.log("Armstrong Number");
// } else {
//     console.log("Not Armstrong Number");
// }

//Print Fibonacci Series up to n Terms

// let n = 10;
// let a = 0, b = 1;

// for (let i = 1; i <= n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
// }

//Find GCD of Two Numbers

// let a = 24;
// let b = 36;

// while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
// }

// console.log("GCD:", a);

//Print All Prime Numbers Between 1 and 100

for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}