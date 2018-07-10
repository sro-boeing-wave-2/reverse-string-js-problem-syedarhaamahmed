// The intent of this file is to reverse
// the string using built in functions.
const reverse = (a) => {
  const SplitKar = a.split('');
  const ReverseKar = SplitKar.reverse();
  const JoinKar = ReverseKar.join('');
  return JoinKar;
};


module.exports = reverse;
