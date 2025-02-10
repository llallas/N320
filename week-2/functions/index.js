function calcTriArea({ base = 1, height = 1 }) {
  return 0.5 * base * height;
}
function calcSquareArea(length, height) {
  return length * height;
}

console.log(calcTriArea(1, 2));
module.exports = { calcTriArea, calcSquareArea };
