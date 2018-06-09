function isPalindrome(s) {
  var new_s = s.replace(/ /g, "");
  var stringReverse = new_s.split("").reverse().join("");
  return new_s == stringReverse;
}

module.exports = isPalindrome;
