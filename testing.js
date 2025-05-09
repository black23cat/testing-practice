function capitalize(str) {
  if (str === undefined || str === '') return;
  const firstLetter = str.slice(0, 1);
  return firstLetter.toUpperCase() + str.slice(1, str.length);
}

function reverseString(str) {
  if (str === undefined || str === '') return;
  return str.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => {
    if (typeof a === 'string') a = Number(a);
    if (typeof b === 'string') b = Number(b);
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

function caesarCipher(str, shiftFactor) {
  if (shiftFactor < 1 || shiftFactor > 25) return 'Invalid shift factor';
  const charCode = getCharCode(str);
  const shiftedCharCode = shiftCharCode(charCode, shiftFactor);
  return String.fromCharCode(...shiftedCharCode);
}

function getCharCode(str) {
  const charCode = [];
  for (let i = 0; i < str.length; i++) {
    charCode.push(Number(str.charCodeAt(i)));
  }
  return charCode;
}

function shiftCharCode(arr, shiftFactor) {
  const shiftedCode = [];
  arr.forEach((code) => {
    if (code > 64 && code < 91 && code + shiftFactor > 90) {
      let newShiftFactor = code + shiftFactor - 90;
      shiftedCode.push(64 + newShiftFactor);
    } else if (code > 96 && code < 123 && code + shiftFactor > 122) {
      let newShiftFactor = code + shiftFactor - 122;
      shiftedCode.push(96 + newShiftFactor);
    } else if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
      shiftedCode.push(code + shiftFactor);
    } else {
      shiftedCode.push(code);
    }
  });
  return shiftedCode;
}

function analyzeArray(array) {
  if (array.length === 0) return 'Array is empty!';
  if (typeof array !== 'object') return;
  const length = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const average = array.reduce((prev, curr) => prev + curr, 0) / length;
  return { average, min, max, length };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
