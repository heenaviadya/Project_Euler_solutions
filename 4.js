const num = 123321;

const stringNum = num.toString();

const splittedArray = stringNum.split("");

function isOdd(data) {
  if (data % 2 === 0) return false;
  else return true;
}

let result = true;

const half = parseInt(splittedArray.length / 2);
console.log(half);
for (let index = 0; index <= half; index++) {
  let lastIndex = splittedArray.length - index - 1;
  console.log(splittedArray[index], splittedArray[lastIndex]);
  if (splittedArray[index] !== splittedArray[lastIndex]) {
    result = false;
    break;
  }
}
console.log(result);
