'use strict';


function divisors(num) {
  let array = [];

  for ( let j = 2; j <= num; j++) {

    while (num % j === 0) {
      array.push(j);
      num = num / j;
      console.log(array);
      return array;
    }

  }
}
// divisors(18);
function primeSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    divisors(arr[i]);
  }

}

console.log(primeSort([1,4,10]));
console.log(primeSort([13,49]));
