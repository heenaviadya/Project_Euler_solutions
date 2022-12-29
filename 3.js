/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

function isPrime(num) {
  console.log(num);
  if (num === 0) return false;
  if (num === 1) return true;
  if (num === 2) return true;

  for (let a = 2; a < num; a++) {
    if (num % a === 0) return false;
  }
  return true;
}

function factors(num) {
  let arrfactor = [];
  for (let i = 0; i < num; i++) {
    let isFactor = num % i === 0;
    if (isFactor) arrfactor.push(i);
  }
  console.log(arrfactor);
  return arrfactor;
}

function prime(array) {
  const result = [];
  for (let a = 0; a < array.length; a++) {
    console.log(a, array[a]);
    if (isPrime(array[a])) return array.push(array[a]);
  }
  return result;
}

function largestFactor(array) {
  let largest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[largest] < array[i]) {
      largest = i;
    }
  }
  return largest;
}

const allfactors = factors(60);
console.log(allfactors);
const primes = prime(allfactors);
console.log(primes);

const result = largestFactor(primes);
console.log(result);
