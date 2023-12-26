const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function binarySearch(a, toFind) {
  const mitad = parseInt(a.length / 2);
  const izquierda = a.slice(0, mitad);
  const derecha = a.slice(mitad, a.length);
  for (let i = 0; i < a.length; i++) {
    if (a[mitad] == toFind) {
      console.log(
        "El numero " + toFind + " se encuentra en la posicion " + mitad
      );
      return 1;
    } else if (a[mitad] > toFind) {
      return binarySearch(izquierda, toFind);
    } else if (a[mitad] < toFind) {
      return binarySearch(derecha, toFind);
    } else {
      return -1;
    }
  }
}
binarySearch(array, 5);
