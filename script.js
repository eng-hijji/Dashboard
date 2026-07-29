function getNum(size) {
  let sum = 2 * 3 * 5 * 7;
  if (size < 3) {
    return -1;
  }
  if (size === 3) {
    return 3;
  } else {
    while (String(sum) !== size) {
      let curr = String(sum).length;
      if (String(sum * 2).length === curr + 1) {
        sum *= 2;
        continue;
      }

      if (String(sum * 3).length === curr + 1) {
        sum *= 3;
        continue;
      }

      if (String(sum * 4).length === curr + 1) {
        sum *= 4;
        continue;
      }
      if (String(sum * 5).length === curr + 1) {
        sum *= 5;
        continue;
      }
      if (String(sum * 6).length === curr + 1) {
        sum *= 6;
        continue;
      }
      if (String(sum * 7).length === curr + 1) {
        sum *= 7;
        continue;
      }

      if (String(sum * 8).length === curr + 1) {
        sum *= 8;
        continue;
      }
      if (String(sum * 9).length === curr + 1) {
        sum *= 9;
        continue;
      }
      if (String(sum * 10).length === curr + 1) {
        sum *= 10;
        continue;
      }
    }
  }
  return sum;
}
console.log(getNum(5));
