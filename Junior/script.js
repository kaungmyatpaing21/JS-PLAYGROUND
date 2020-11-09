/** Problem 1
 * orderInUnique('AABBBCcADEE') == ['A', 'B', 'C', 'c', 'A', 'D', 'E'];
 * orderInUnique('112233') == ['1', '2', '3'];
 *
 * var orderInUnique = function(iterable){
 *    // iterable may be string or array
 * }
 */

/*
const orderInUnique = function (iterable) {
  let result = [];
  let newArray = [];

  if (iterable.constructor === String) {
    newArray = iterable.split("");
  } else if (iterable.constructor === Array) {
    newArray = iterable;
  }

  result = newArray.filter((val, idx) => {
    if (idx === 0) {
      // first index
      return val;
    } else {
      // other indexes other than first index
      if (newArray[idx] !== newArray[idx - 1]) {
        return newArray[idx];
      }
    }
  });
  return result;
};

console.log(orderInUnique(["A", "A", "B", "B", "C", "c", "A"]));
console.log(orderInUnique("AABBCcDABB"));
console.log(orderInUnique("112233"));
*/

// =====================================================

/**
 * Get Middle Character
 *
 * You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character.
 * If the word's length is even, return the middle 2 characters.
 *
 * Kata.getMiddle("test") should return "es"
 * Kata.getMiddle("testing") should return "t"
 * Kata.getMiddle("middle") should return "dd"
 * Kata.getMiddle("A") should return "A"
 */

/*
const getMiddle = function (s) {
  const arr = s.split("");
  const count = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    // even
    const first_word = arr[count - 1];
    const second_word = arr[count];
    return `${first_word}${second_word}`;
  } else {
    // odd
    return arr[count];
  }
};

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
*/

// ===============================================================================

/**
 * Find the Parity outlier
 *
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers.
 * The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
 * Write a method that takes the array as an argument and returns this "outlier" N.
 *
 * Examples:
 * [2, 4, 0, 100, 4, 11, 2602, 36]
 * Should return: 11 (the only odd number)
 *
 * [160, 3, 1719, 19, 11, 13, -21]
 * Should return: 160 (the only even number)
 */

/*
function findOutlier(arr) {
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return even.length > 1 && odd.length === 1 ? odd[0] : even[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
*/

// =================================================================================================================

/**
 * Your Order,please
 *
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
 *
 * Examples:
 * "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 * ""  -->  ""
 */

/*
const order = function (words) {
  if (words === "") return words;

  const arr = words.split(" ");
  let resultArr = new Array(arr.length);

  let intIdx;
  for (let i = 0; i < arr.length; i++) {
    intIdx = arr[i].match(/\d+/)[0];
    resultArr[intIdx - 1] = arr[i];
  }

  return `${resultArr.join(" ")}`;
};

console.log(order("is2 Thi1s T4est 3a"));
*/

// =======================================================================================================

/**
 * Descending Order
 *
 * Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
 * Essentially, rearrange the digits to create the highest possible number.
 *
 * Examples:
 * Input: 42145 Output: 54421
 * Input: 145263 Output: 654321
 * Input: 123456789 Output: 987654321
 */

/*
function descendingOrder(n) {
  const intArr = n
    .toString()
    .split("")
    .sort((a, b) => b - a);

  return parseInt(intArr.join(""));
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
*/

// ==========================================================================================================

/**
 * Persistance Bugger
 *
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
 * which is the number of times you must multiply the digits in num until you reach a single digit.
 *
 * Examples:
 *  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
                       
    persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

    persistence(4) === 0 // because 4 is already a one-digit number
 */

/*
function persistence(num) {
  let numArr = num.toString().split("");
  let res = 1;
  let persistenceData = 0;

  if (numArr.length === 1) {
    return 0;
  } else {
    do {
      for (let i = 0; i < numArr.length; i++) {
        res *= Number(numArr[i]);
      }

      numArr = res.toString().split("");
      res = 1;
      persistenceData++;
    } while (numArr.length !== 1);
  }

  return persistenceData;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
*/

// =======================================================================================

/**
 * Equal Sides of An array
 *
 * You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is
 * equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
 *
 * For example:
 * Let's say you are given the array {1,2,3,4,3,2,1}: Your function will return the index 3, because at the 3rd position of the array, the sum of left side of
 * the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
 *
 * Let's look at another one.
 * You are given the array {1,100,50,-51,1,1}: Your function will return the index 1, because at the 1st position of the array, the sum of left side of the
 * index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
 *
 * Last one:
 * You are given the array {20,10,-80,10,10,15,35}
 * At index 0 the left side is {}
 * The right side is {10,-80,10,10,15,35}
 * They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
 * Index 0 is the place where the left side and right side are equal.
 *
 * Note: Please remember that in most programming/scripting languages the index of an array starts at 0.
 *
 * Input:
 * An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
 *
 * Output:
 * The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will
 * return -1.
 *
 * Note:
 * If you are given an array with multiple answers, return the lowest correct index.
 */

/*
function findEvenIndex(arr) {
  if (arr.length === 1) {
    return 0;
  } else {
    let left_total = 0;
    let right_total = 0;
    var correct_idx = [];
    for (let i = 0; i < arr.length; i++) {
      if (i !== 0) {
        left_total = arr
          .slice(0, i)
          .reduce((accumulator, currentValue) => accumulator + currentValue);
      }

      if (i !== arr.length - 1) {
        right_total = arr
          .slice(i + 1, arr.length)
          .reduce((accumulator, currentValue) => accumulator + currentValue);
      }

      if (left_total === right_total) {
        correct_idx.push(i);
      }

      left_total = 0;
      right_total = 0;
    }

    if (correct_idx.length === 0) {
      return -1;
    }

    return correct_idx[0];
  }
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
*/

// ========================================================================================
