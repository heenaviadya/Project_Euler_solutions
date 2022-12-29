/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
soltion:
    logic (num % 3 === 0 || num % 5 === 0 )
    store data into array
    loop over array to get result

GET A LIST OF DATA THAT ARE MULTIPLE OF 3 OR 5
*/
function getMultiple(N) {
  const storage = [];
  for (let i = 0; i < N; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      storage.push(i);
    }
  }
  return storage;
}

// GET THE TOTAL
function getTotal(array) {
  let result = 0;
  for (let index = 0; index < array.length; index = index + 1) {
    result = result + array[index];
  }

  return result;
}

const arrayList = getMultiple(10);
const finalResult = getTotal(arrayList);
console.log(finalResult);
