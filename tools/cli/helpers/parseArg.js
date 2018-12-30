function parseArg(str = '') {
  if (!str) {
    return false;
  }

  const argVal = str.split('=');

  return argVal.length === 2 ? { key: argVal[0], val: argVal[1] } : false;
}

module.exports = parseArg;
