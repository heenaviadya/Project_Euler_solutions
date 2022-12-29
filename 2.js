/*Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. */
let num,
  n1 = 0,
  n2 = 1;
function getFibo(N) {
  const storage = [];
  for (let i = 0; i < N; i++) {
    num = n1 + n2;
    if (num < 4000000) storage.push(num);
    n1 = n2;
    n2 = num;
  }
  return storage;
}

function getSumOfEven(array) {
  let result = 0;
  for (let index = 0; index < array.length; index = index + 1) {
    if (array[index] % 2 === 0) {
      console.log(array[index]);
      result = result + array[index];
    }
  }

  return result;
}

const fiboResult = getFibo(30);
console.log(fiboResult);
const finalResult = getSumOfEven(fiboResult);

console.log(
  "this is the sum Of all even fibo sequence of given number",
  finalResult
);