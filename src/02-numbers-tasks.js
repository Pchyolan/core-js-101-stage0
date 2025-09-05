/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

function getRectangleArea(wid, hed) {
  return wid * hed;
}

function getCircleCircumference(rad) {
  return 2 * rad * Math.PI;
}

function getAverage(val1, val2) {
  return val1 / 2 + val2 / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const v1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const v2 = Math.sqrt(x2 ** 2 + y2 ** 2);
  const cos = (x1 * x2 + y1 * y2) / (v1 * v2);
  return Math.acos(cos);
}

function getLastDigit(val) {
  return val % 10;
}

function parseNumberFromString(val) {
  return Number(val);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

function roundToPowerOfTen(nam, pow) {
  const step = 10 ** pow;
  return Math.round(nam / step) * step;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function toNumber(val, def) {
  const num = Number(val);
  return Number.isFinite(num) ? num : def;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
