/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

function concatenateStrings(val1, val2) {
  return val1 + val2;
}

function getStringLength(val) {
  return val.length;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(val) {
  return val.substring(7, val.length - 1);
}

function getFirstChar(val) {
  return val[0];
}

function removeLeadingAndTrailingWhitespaces(val) {
  return val.trim();
}

function repeatString(val, count) {
  return val.repeat(count);
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function unbracketTag(str) {
  return str.replace('<', '').replace('>', '');
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function extractEmails(str) {
  return str.split(';');
}

function getRectangleString(width, height) {
  const gor = '─';
  const ver = '│';
  const prob = ' ';
  const verLine = `${ver}${prob.repeat(width - 2)}${ver}\n`;
  return `┌${gor.repeat(width - 2)}┐\n${verLine.repeat(height - 2)}└${gor.repeat(width - 2)}┘\n`;
}

function encodeToRot13(str) {
  const alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const lat = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (alp.indexOf(str[i]) !== -1) {
      newStr += lat[alp.indexOf(str[i])];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

function getCardId(str) {
  const cards = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];

  return cards.indexOf(str);
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
