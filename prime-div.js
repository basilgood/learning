function divisors(num) {
  let array = [];

  for (let j = 2; j <= num; j++) {
    while (num % j === 0) {
      num = num / j;
      array[array.length] = j;
    }
  }
  return array;
}

// console.log(divisors(10));

function primeSort(arr) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes[arrRes.length] = (divisors(arr[i]));
  }
  return arrRes;
}

console.log(primeSort([2,4,9,68,10,144,100]));
