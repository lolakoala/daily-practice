// Implement int sqrt(int x).

// Compute and return the square root of x.

// x is guaranteed to be a non-negative integer.

var mySqrt = function(x) {
  if (x <= 1) {
    return x;
  }
  for (let i = 0; i <= (x / 2); i++) {
    let j = i + 1;
    if (i * i === x || (i * i < x && j * j > x)) {
      return i;
    }
  }
};
