function conv(x, h) {
  let y = new Array(x.length + h.length - 1).fill(0);
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < h.length; j++) {
      /* console.log(y[i + j]); */
      y[i + j] += x[i] * h[j];
      console.log(y[i + j]);
    }
  }
  return console.log(y);
}

let x = [1, 2, 1];
let h = [2, 3, -2, 0];

console.log(x, h);
resultado = conv(x, h);
