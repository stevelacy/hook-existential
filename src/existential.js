// test?.check
// test?.check?.undefined
// test.check?.secondary
// test?()
var existRegex = /([a-zA-Z]\w+)\?[.|()]/;

function replaceProp(str) {
  do {
    var matches = existRegex.exec(str);
    if (!matches) {
      return str;
    }
    var before = str.substr(0, matches.index);
    var after = str.substr(matches.index + matches[0].length);
    var initial = matches[1];
    var prop = matches[2] || '';
    var prefix = ''
    var separator = '.'
    var connector = ' && '
    if (before[before.length - 1] === '.') {
      // has a parent selector
      prefix = before.split(/[ |\(|\{]/).splice(-1);
    }
    if (matches[0][matches[0].length - 1] === '(') {
      // is a function existential
      separator = '('
      connector = ' && typeof ' + initial + ' === "function"' + ' && '
    }
    str = before + initial + connector + prefix + initial + separator + prop + after
  } while (matches);
}

function existential(str) {
  if (typeof str !== 'string') {
    throw new Error('expected a string to replace ?. syntax');
  }
  return replaceProp(str);
}

module.exports = existential;
