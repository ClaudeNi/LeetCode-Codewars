function isValidIP(str) {
  if (!/^[0-9.]*$/g.test(str)) {
    return false;
  }
  const arr = str.split(".");
  if (arr.length != 4) {
    return false
  }
  for (let num of arr) {
    if (num.length == 0) {
      return false;
    }
    if (num.length > 1 && num[0] == '0') {
      return false;
    }
    if (num < 0 || num > 255) {
      return false;
    }
  }
  return true;
}
