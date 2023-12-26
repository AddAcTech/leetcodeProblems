const signalA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const signalB = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function correlation(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
    console.log(result);
  }
  return result;
}

console.log(correlation(signalA, signalB));
