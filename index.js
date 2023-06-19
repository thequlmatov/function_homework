//sonning teskarisi

// function reverseNumber(num) {
//   let reversedNum = 0;
//   while (num > 0) {
//     reversedNum = reversedNum * 10 + num % 10;
//     num = Math.floor(num / 10);
//   }
//   return reversedNum;
// }

// console.log(reverseNumber(12345)); // Output: 54321



//Palindrome

// function isPalindrome(num) {
//   let reversedNum = 0;
//   let originalNum = num;
//   while (num > 0) {
//     reversedNum = reversedNum * 10 + num % 10;
//     num = Math.floor(num / 10);
//   }
//   if (originalNum === reversedNum) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome(12321)); //  true
// console.log(isPalindrome(12345)); //  false