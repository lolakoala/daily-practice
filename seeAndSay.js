// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

const otherFunc = (numArray, n, timesGoneThru) => {
  // break case
  if (n - 1 === timesGoneThru) {
    return numArray;
  }
  const workingArray = [];

  while (numArray.length) {
    let counter = 0;
     while (numArray[counter] === numArray[0]) {
    counter ++;
    }

  workingArray.push(counter);
  workingArray.push(numArray[0]);
  numArray.splice(0, counter);
  }

  timesGoneThru++;
  return otherFunc(workingArray, n, timesGoneThru) ;
}

var countAndSay = function(n) {


  const numArray = [1];
  if (n === 1) {
    return "1";
  }

  return otherFunc(numArray, n, 0).join("").toString();
};
