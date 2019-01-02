function bubbleSort(a) {
  let ok;
  do {
    ok = false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] > a[i+1]) {
        let tmp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = tmp;
        ok = true;
      }
    }
  } while (ok);
  return a;
}

console.log(bubbleSort([1175,779,4,3,2,844,18,8]));
