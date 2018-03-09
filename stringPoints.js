// write in a function that takes in a string and evaluates the first and
// last letter and gives a point if they are identical, working inward until
// all letters are evaluated, returning total points

const stringPoints = s => {
  let points = 0;
  let halfway = s.length %  2 === 0 ? (s.length / 2) - 1 : s.length / 2;

  for (let i = 0; i <= halfway; i++) {
    let j = (s.length - i) - 1;

    if (s[i] === s[j]) {
      points++;
    }
  }

  return points;
}
