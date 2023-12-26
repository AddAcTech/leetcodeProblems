/*  const cadena = "perseverar";
//To find 253674078499881
function hash(string) {
  let seed = 41;
  const diccionario = "abefimoprstuv";
  for (let i = 0; i < string.length; i++) {
    seed = seed * 19 + diccionario.indexOf(string[i]);
    /* console.log(seed); 
  }
  return seed;
}

valor = hash(cadena);

if (valor === 253674078499881) {
  console.log("YES");
} else {
  console.log("no");
}

seed_temp = 253674078499881;
diccionario = "abefimoprstuv";
result = "";

while (seed_temp > 41) {
  for (let i = 0; i < diccionario.length; i++) {
    if ((seed_temp - diccionario.indexOf(diccionario[i])) % 19 === 0) {
      result = diccionario[i] + result;
      seed_temp = (seed_temp - diccionario.indexOf(diccionario[i])) / 19;
      break;
    }
  }
}

console.log(result);
 */

class A {
  getA() {
    return 2;
  }
}
class B extends A {
  getB() {
    return super.getA() * 100;
  }
}
let c = new B().getB();

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
Promise.all([p1, p2]).then(function (values) {
  const p3 = values[1];
  console.log(p3);
});
