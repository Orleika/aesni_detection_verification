process.stdin.resume();
process.stdin.setEncoding('utf8');

var input_lines = '';
process.stdin.on('data', function(chunk) {
  input_lines += chunk;
});

function stringCompare(cb) {
  return function(a, b) {
    if (a < b)
      return -1;
    else if (a > b)
      return 1;
    return cb(a, b);
  }
}

function numberCompare(cb) {
  return function(a, b) {
    var numA = parseInt(a, 10);
    var numB = parseInt(b, 10);

    if (numA < numB)
      return -1;
    else if (numA > numB)
      return 1;
    else
      return cb(a, b);
  }
}

function compare(cb) {
  return function(a, b) {
    if (a < b)
      return -1;
    else if (a > b)
      return 1;
    else
      cb;
  }
}

// process.stdin.on('end', function() {
// var lines = input_lines.trim().split('\n');

var lines = ["abc1.txt", "abc2.txt", "abc10.txt", "abc21.txt", "abc100.txt", "abc01.txt", "ABC1.png", "abc1.csv", "abc021.png"];

var key = lines.map(function(line) {
  var re = /([a-z]+)([0-9]+)\.([a-z]+)/i;
  var match = re.exec(line);
  return [match[1], parseInt(match[2], 10), match[2], match[3]];
});

console.log(key);
var phase2 = compare(function(a, b) {

});
// var phase2 = numberCompare(function(a, b) {
//   var re = /\.([a-z]+)/i;
//   return phase3(re.exec(a)[1], re.exec(b)[1]);
// });

// console.log(w);
// });
// console.log(result.join('\n'));
