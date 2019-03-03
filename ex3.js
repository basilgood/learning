let arr = [3,1,6,4,9,4,7,12,14,1];

let k;
let nInd;

do
{
  nInd = 0;
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] > arr[i + 1])
    {
      k = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = k;

      nInd = nInd + 1;
    }
  }
  // console.log(nInd);
} while (nInd > 0);
console.log(arr);
