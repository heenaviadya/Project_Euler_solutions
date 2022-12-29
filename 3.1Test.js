// What is the largest prime factor of the number 600851475143 ?*/

const getFactors = (num) => {
  const result = [];
  const half = parseInt(num / 2) + 1;
  //   const half = num;
  for (let a = 0; a <= half; a++) {
    if (num % a === 0) result.push(a);
  }
  return result;
};

const getPrime = (array) => {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    let isPrime = true;
    const half = parseInt(num / 2) + 1;

    for (let b = 2; b < half; b++) {
      if (array[index] % b === 0) {
        isPrime = false;
      }
    }
    if (isPrime) result.push(array[index]);
  }
  return result;
};

function largestNumber(array) {
  let largest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[largest] < array[i]) {
      largest = i;
    }
  }
  return largest;
}

const factorials = getFactors(600851475143);
console.log(factorials);

const primes = getPrime(factorials);
console.log(primes);

const largestIndex = largestNumber(primes);
const result = primes[largestIndex];
console.log(result);
