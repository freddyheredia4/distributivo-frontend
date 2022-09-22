const numeros = [1, 2, 4, 5];

function findSumPair(numbers, k) {
  let array = [];

  numeros.sort((a, b) => {
    if (a + b == k) {
      array.push(a, b);
      return array;
    }
    return array;
  });

  return [];
}

console.log(findSumPair(numeros, 3));
