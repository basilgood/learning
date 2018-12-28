function divisors(num) {
  let array = [];

  for (let j = 2; j <= num; j++) {
    let ok = false;
    while (num % j === 0) {
      num = num / j;
      ok = true;
    }
    if (ok) {
      array[array.length] = j;
    }
  }
  return array;
}

// console.log(divisors(10));

function primeSort(arr) {
  let arrRes = [];
  // let lastArr = [];
  for (let i = 0; i < arr.length; i++) {
    let divs = divisors(arr[i]);
    // console.log(divs);
    for (let n = 0; n < divs.length; n++) {
      arrRes[arrRes.length] = divs[n];
    }
  }
  // console.log(lastArr);
  return arrRes;
}


console.log(primeSort([2, 4, 9, 68, 10, 144, 100]));
