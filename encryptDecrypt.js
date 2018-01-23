// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!
//
// Examples:
//
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:
//
// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.


function encrypt(text, n) {

  let textArray = [...text];
  let evenArray = [];
  let oddArray = [];

  for (let i = 0; i <= textArray.length - 1; i++) {
    if (i % 2 !== 0 && i !== 0) {
      evenArray.push(textArray[i]);
    } else {
      oddArray.push(textArray[i]);
    }
  }

  let newArray = [...evenArray, ...oddArray];

  if (n > 0) {
    return encrypt(newArray.join(""), n - 1);
  }

  if (n === 1) {
    return newArray.join("");
  }

  if (n <= 0 || text.length <= 0) {
    return text;
  }
}


function decrypt(encryptedText, n) {
  if (n <= 0 || encryptedText.length <= 0) {
    return encryptedText;
  }

  let half = Math.floor(encryptedText.length/2);

  let evenArray = [...encryptedText].slice(0, half);
  let oddArray = [...encryptedText].slice(half);
  let newArray = [];

  while (evenArray.length && oddArray.length) {
    newArray = [...newArray, oddArray[0], evenArray[0]];
    oddArray.shift();
    evenArray.shift();
  }

  if (evenArray.length && !oddArray.length) {
    newArray = [...newArray, ...evenArray];
  }

  if (oddArray.length && !evenArray.length) {
    newArray = [...newArray, ...oddArray];
  }

  if (n === 1) {
    return newArray.join("");
  }

  if (n > 1) {
    return decrypt(newArray.join(""), n - 1);
  }


}
