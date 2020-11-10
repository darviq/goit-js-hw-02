function checkForSpam (str) { 
  'use strict';
  // Write code under this line
    const message = str.toLowerCase();
    return message.includes("spam") || message.includes("sale") ? true : false;
//   if (message.includes("spam")) {
//     return true;
//   } else if (message.includes("sale")) {
//     return true;
//   } else return false
}

//console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true