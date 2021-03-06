/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) { return null; }
  if (n === 1 || n === 0) { return 1; }

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) { return 0; }
  if (array.length === 1) { return array[0]; }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;
  if (array.length === 0) { return 0; }

  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    } else if (Array.isArray(array[i])) {
      sum += parseInt(arraySum(array[i]));
    }
  }
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) { return true; }
  if (n === 1) { return false; }
  return n > 0 ? isEven(n - 2) : isEven(n + 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) { return 0; }
  if (n > 0) {
    return n - 1 + sumBelow(n - 1);
  } else {
    return n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var reverseFlag = false;
  if (x > y) {
    reverseFlag = true;
    var temp = x;
    x = y;
    y = temp;
  }
  if (y - x === 2) {
    return [x + 1];
  } else if (y - x < 2) {
    return [];
  } else {
    var arr = range(x, y - 1);
    arr.push(y - 1);
    return reverseFlag ? arr.reverse() : arr;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 1 || exp === -1) { return base; }
  if (exp === 0) { return 1; }
  return exp >= 0 ? base * exponent(base, exp - 1) : 1 / exponent(base, -exp);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 2 || n === 1) { return true; }
  if (n % 2 > 0 || n === 0) { return false; }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  } else {
    var temp = string[0];
    var str = reverse(string.substring(1));
    var arr = str.split('');
    arr.push(temp);
    return arr.join('');
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var str = string.toLowerCase().replace(' ', '');
  if (str[0] !== str[str.length - 1]) { return false; }
  if (str.length === 0 || str.length === 1) { return true; }
  return palindrome(str.substring(1, str.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) { return NaN; }
  if (abs(x) < abs(y)) { return x; }
  if (x === y) { return 0; }
  return pos(x, y) ? modulo(x - y, y) : modulo(x + y, y);

  function abs(x) {
    return x > 0 ? x : 0 - x;
  }

  function pos(x, y) {
    return (x >= 0 && y >= 0) || (x < 0) && (y < 0);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

  if (x === 0 || y === 0) { return 0; }
  if (x === 1) { return y; }
  if (y === 1) { return x; }

  return x >= 0 && y < 0 ? (0 - x) + multiply((0 - x), abs(y) - 1)
       : x < 0 && y >= 0 ? x + multiply(x, y - 1)
       : abs(x) + multiply(abs(x), abs(y) - 1);

  function abs(x) {
    return x > 0 ? x : 0 - x;
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) { return NaN; }
  if (abs(x) === abs(y)) { return 1; }
  if (abs(x) < abs(y)) { return 0; }

  if (pos(x,y)) {
    return 1 + divide(x - y, y);
  } else {
    return -1 - divide(x + y, y);
  }

  function abs(x) {
    return x > 0 ? x : 0 - x;
  }

  function pos(x, y) {
    return (x >= 0 && y >= 0) || (x < 0) && (y < 0);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) { return null; }
  if (x === 0) { return y; }
  if (y === 0) { return x; }
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) { return true; }
  if (str1.charAt(0) === str2.charAt(0)) { return compareStr(str1.slice(1), str2.slice(1)); }
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) { return []; }
  arr = createArray(str.slice(1));
  arr.unshift(str.charAt(0));
  return arr;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) { return []; }
  var arr = reverseArr(array.slice(1));
  arr.push(array[0]);
  return arr;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) { return []; }
  var arr = buildList(value, length - 1);
  arr.push(value);
  return arr;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 0) { return []; }
  var arr = fizzBuzz(n - 1);
  if (n % 3 === 0 && n % 5 === 0) { arr.push('FizzBuzz'); }
  else if (n % 3 === 0) { arr.push('Fizz'); }
  else if (n % 5 === 0) { arr.push('Buzz'); }
  else { arr.push(n.toString()); }
  return arr;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;
  if (array.length === 0) { return 0; }
  if (array[0] === value) { var count = 1; }
  return count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) { return []; }
  var arr = rMap(array.slice(1), callback);
  arr.unshift(callback(array[0]));
  return arr;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;

  for (var property in obj) {
    if (typeof obj[property] === 'object') {
      count += countKeysInObj(obj[property], key);
    }
    if (property === key) {
      count++;
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;

  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      count += countValuesInObj(obj[key], value);
    }
    if (obj[key] === value) {
      count++;
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[oldKey]
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) { return null; }
  if (n === 1) {
    var arr = [0,1];
    return arr;
  }
  var arr = fibonacci(n - 1);
  var len = arr.length;
  arr.push(arr[len - 1] + arr[len - 2]);
  return arr;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) { return null; }
  if (n <= 1) { return n; }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  }
  var arr = capitalizeWords(array.slice(1));
  arr.unshift(array[0].toUpperCase());
  return arr;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) { return []; }
  var arr = capitalizeFirst(array.slice(1));
  arr.unshift(array[0].charAt(0).toUpperCase() + array[0].slice(1));
  return arr;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var key in obj) {
    var num = 0;
    if (typeof obj[key] === 'object' && obj.hasOwnProperty(key)) {
      sum += nestedEvenSum(obj[key]);
    }
    num = parseInt(obj[key]);
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1 && !Array.isArray(array)) {
    return array;
  }
  var arr = flatten(array.slice(1));
  if (Array.isArray(array[0])) {
    arr = flatten(array[0]).concat(arr);
  } else {
    arr.unshift(array[0]);
  }
  return arr;
};


// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (str.length === 0) { return {}; }
  var obj = letterTally(str.slice(1));
  obj[str.charAt(0)] = (obj[str.charAt(0)] || 0) + 1;
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length === 0) { return []; }
  var arr = compress(list.slice(1));
  if (list[0] !== arr[0]) {
    arr.unshift(list[0]);
  }
  return arr;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) { return; }
  var arr = augmentElements(array.slice(1), aug);
  array[0].push(aug);
  return array;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) { return []; }
  var arr = minimizeZeroes(array.slice(1));
  if (array[0] !== 0 || arr[0] !== 0) {
    arr.unshift(array[0]);
  }
  return arr;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 1) { return [abs(array[0])]; }
  var arr = alternateSign(array.slice(1));
  if (arr[0] < 0) {
    arr.unshift(abs(array[0]));
  } else {
    arr.unshift(abs(array[0]) * -1);
  }
  if (arr[0] < 0) {
    return arr.map(x => x * -1 );
  }
  return arr;

  function abs(x) {
    return x > 0 ? x : 0 - x;
  }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var numMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };
  if (str.length === 0) { return ''; }
  var newStr = numToText(str.slice(1));
  if (numMap[str.charAt(0)]) {
    return numMap[str.charAt(0)] + newStr;
  } else {
    return str.charAt(0) + newStr;
  }
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
// ex.  $rootElement = $('<div id="tagCountTest"><p>beep</p><div><p><span>blip</span></p></div><p>blorp</p></div>');
var tagCount = function(tag, node) {
  var sum = 0; 
  if (!node) {
    var bodyList = document.getElementsByTagName('body');
    var node = bodyList[0];
  }
  
  if (node.children) {
    var nodeList = node.childNodes;
    nodeList.forEach(function(n){
      sum += tagCount(tag, n);  
    });
  }
  
  if (node.nodeName.toLowerCase() === tag) {
    sum++;
  }
  
  return sum;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (min === undefined) {
    var min = 0
    var max = array.length - 1;
  }

  var half = Math.ceil((min + max) / 2);

  if (target === array[half]) {
    return half;
  }

  if (min > max) {
    return null;
  }

  if (target < array[half]) {
    return binarySearch(array, target, min, half - 1);
  }

  if (target > array[half]) {
    return binarySearch(array, target, half + 1, max);
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  var half = Math.ceil((array.length - 1) / 2);
  if (array.length > 2) {
    var lowerArr = mergeSort(array.slice(0, half));
    var upperArr = mergeSort(array.slice(half));
    return merge(lowerArr.concat(upperArr));
  }
  if (array.length === 2) {
    if (array[0] > array[1]) {
      var temp = array[0];
      array[0] = array[1];
      array[1] = temp;
    }
  }
  return array;

  function merge(arr) {
    var combine = [];
    var end = arr.length - 1;
    var mid = Math.ceil((end / 2));
    var p = 0;    // index for first part
    var q = mid;  // index for second part
   
    for (var i = 0; i < arr.length; i++) {
      if (p >= mid) {
        combine.push(arr[q++]);
      } else if (q > end) {
        combine.push(arr[p++]);
      } else if (arr[p] < arr[q]) {
        combine.push(arr[p++]);
      } else {
        combine.push(arr[q++]);
      }
    }
    return combine;
  }
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (Array.isArray(input)) {
    var newArr = input.map(function(x) {
      return clone(x);
    });
    return newArr;
  } else if (typeof input === 'object') {
    var newObj = {};
    for (var key in input){
      newObj[key] = clone(input[key]);
    }
    return newObj;
  } else {
    return input;
  }
};
