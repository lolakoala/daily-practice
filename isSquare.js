// Given an integral number, determine if it's a square number:

const isSquare = n => {
  if (n.toString().charAt(0) === '-') {
    return false;
  }

  let sq = false;

  for (let i = Math.ceil(n / 2); i > 0; i--) {
    if (i * i === n) {
      sq = true;
    }
  }

  return sq;
}
