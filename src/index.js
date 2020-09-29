module.exports = function reverse (n) {
  let str = String(Math.abs(n));
  console.log(str);
  return Number(str.split('').reverse().join(''));
}
