// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

var lengthOfLastWord = function(s) {
    if (!s.length) {
        return 0;
    }

    const lastSpace = s.lastIndexOf(' ');
    if (lastSpace === -1) {
      return s.length;
    } else {
      return s.slice(lastSpace + 1).length;
    }
};
