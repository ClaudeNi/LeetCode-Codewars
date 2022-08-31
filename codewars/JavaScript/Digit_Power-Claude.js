function digPow(n, p){
  let sum = 0;
  nStr = n.toString();
  for (let i = 0; i < nStr.length; i++) {
    sum += (nStr.charAt(i) ** (p + i));
  }
  let k = sum / n;
  if (Number.isInteger(k)) {
    return k;
  }
  return -1;
}
