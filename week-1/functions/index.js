console.log("math");

function quadraticFormula(a, b, c) {
  const root = Math.sqrt(b * b - 4 * a * c);
  const denominator = 2 * a;
  const positive = (-b + root) / denominator;
  const negative = (-b - root) / denominator;
  return [positive, negative];
}

console.log(quadraticFormula(1, -3, 2)); // [2, 1]

module.exports = { quadraticFormula };
