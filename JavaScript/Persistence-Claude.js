function persistence(num) {
  let counter = 0;
  let num2 = 1;
  while (num > 9) {
    for (let i of num.toString()) {
      num2 *= parseInt(i);
    }
    num = num2;
    num2 = 1;
    counter++;
  }
  return counter;
}
