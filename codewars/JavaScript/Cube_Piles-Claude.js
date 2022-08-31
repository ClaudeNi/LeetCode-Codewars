function findNb(m) {
  let sum = 0;
  let n = 1;
  while (sum < m) {
    sum += n**3;
    n++;
  }
    return sum == m ? n-1 : -1;
}
