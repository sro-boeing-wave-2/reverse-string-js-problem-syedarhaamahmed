// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (a) => {
  let out = '';
  let i;

  for (i = a.length - 1; i >= 0; i -= 1) {
    out += a[i];
  }
  return out;
};

module.exports = reverse;
