const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require('./testing');

test('Capitalize first letter Test 1 : "pallas" = "Pallas" ', () => {
  expect(capitalize('pallas')).toBe('Pallas');
});

test('Capitalize first letter Test 2 : "" = undefined', () => {
  expect(capitalize('')).toBeUndefined();
});

test('Capitalize first letter Test 3 : "w" = "W" ', () => {
  expect(capitalize('w')).toBe('W');
});

test('Reverse string Test 1 :"cat" = "tac"', () => {
  expect(reverseString('cat')).toBe('tac');
});

test('Reverse string Test 2 :"" = undefined', () => {
  expect(reverseString('cat')).toBe('tac');
});

test('Reverse string Test 3 :"denifednu" = "undefined"', () => {
  expect(reverseString('denifednu')).toBe('undefined');
});

test('Reverse string Test 4 :"Hello, World!" = "!dlroW ,olleH"', () => {
  expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
});

test('Reverse string Test 5 :"The QUiCK brOwn Fox." = ".xoF nwOrb KCiUQ ehT"', () => {
  expect(reverseString('The QUiCK brOwn Fox.')).toBe('.xoF nwOrb KCiUQ ehT');
});

test('Calculator add Test 1 : 1 + 1 = 2', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('Calculator add Test 2 : 1 + NaN = NaN', () => {
  expect(calculator.add(1, NaN)).toBeNaN();
});

test('Calculator add Test 3 : null + null = 0', () => {
  expect(calculator.add(null, null)).toBe(0);
});

test('Calculator add Test 4 : 5 + null = 5', () => {
  expect(calculator.add(5, null)).toBe(5);
});

test('Calculator add Test 5 : "1" + 1 = 2', () => {
  expect(calculator.add('1', 1)).toBe(2);
});

test('Calculator subtract Test 1 : 5 - 3 = 2', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('Calculator subtract Test 2 : 1 - NaN = NaN', () => {
  expect(calculator.subtract(1, NaN)).toBeNaN();
});

test('Calculator subtract Test 3 : null - null = 0', () => {
  expect(calculator.subtract(null, null)).toBe(0);
});

test('Calculator subtract Test 4 : 5 - null = 5', () => {
  expect(calculator.subtract(5, null)).toBe(5);
});

test('Calculator multiply Test 1 : 5 * 3 = 15', () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test('Calculator multiply Test 2 : 5 * NaN = NaN', () => {
  expect(calculator.multiply(5, NaN)).toBeNaN();
});

test('Calculator multiply Test 3 : null * null = 0', () => {
  expect(calculator.multiply(null, null)).toBe(0);
});

test('Calculator multiply Test 4 : 5 * null = 0', () => {
  expect(calculator.multiply(5, null)).toBe(0);
});

test('Calculator divide Test 1 : 20 / 3 = 6.666', () => {
  expect(calculator.divide(20, 3)).toBeCloseTo(6.666);
});

test('Calculator divide Test 2 : 5 / NaN = NaN', () => {
  expect(calculator.divide(5, NaN)).toBeNaN();
});

test('Calculator divide Test 3 : null / null = NaN', () => {
  expect(calculator.divide(null, null)).toBeNaN();
});

test('Calculator divide Test 4 : 5 / null = Infinity', () => {
  expect(calculator.divide(5, null)).toBe(Infinity);
});

test('Caesar Cipher Test 1: "xyz", 3 = "abc"', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Caesar Cipher Test 2: "HeLLo", 3 = "KhOOr"', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Caesar Cipher Test 3: "HeLLo, World!", 3 = "KhOOr, Zruog!"', () => {
  expect(caesarCipher('HeLLo, World!', 3)).toBe('KhOOr, Zruog!');
});

test('Caesar Cipher Test 4: "!$%!DANGERZZZZ!%$!", 5 = "!$%!IFSLJWEEEE!%$!"', () => {
  expect(caesarCipher('!$%!DANGERZZZZ!%$!', 5)).toBe('!$%!IFSLJWEEEE!%$!');
});

test('Caesar Cipher Test 5: "blablabla", 24 = "zjyzjyzjy"', () => {
  expect(caesarCipher('blablabla', 24)).toBe('zjyzjyzjy');
});

test(`Analyze array Test 1: 
  [1, 8, 3, 4, 2, 6] == 
  { 
    average: 4,
    min: 1, 
    max: 8, 
    length: 6 
  }`, () => {
  const data = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(data).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test(`Analyze array Test 2: 
  [25, 40, 28, 81, 34, 29, 88, 96, 81, 28] == 
  { 
    average: 53, 
    min: 25, 
    max: 96, 
    length: 10 
  }`, () => {
  const data = analyzeArray([25, 40, 28, 81, 34, 29, 88, 96, 81, 28]);
  expect(data).toEqual({ average: 53, min: 25, max: 96, length: 10 });
});

test(`Analyze array Test 3: 
  [] == "Array is empty!"`, () => {
  const data = analyzeArray([]);
  expect(data).toBe('Array is empty!');
});
