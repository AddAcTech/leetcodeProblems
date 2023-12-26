const myString = "Hola mundo, esto es un string";

function filterString(string) {
  const stringArray = string.split(" ").splice(0, 3);
  const newString = stringArray.join(" ");
  return newString;
}
console.log(filterString(myString));
