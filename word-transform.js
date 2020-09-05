/**
 * @param {String} line
 * @returns {String}
 */
module.exports = function (line) {
  let arr = line.split(' ');

  let word1 = arr[0].split('');
  let word2 = arr[1].split('');

  if (word1.length != word2.length) {
    return 0;
  }

  var abc = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

  for (var i = 0; i < word1.length; i++) {
    if (!word1.every((e, j) => (e !== word1[i]) || (e == word1[i] && word2[j] == word2[i]))) {
      return 0;
    }
  }

  var i = 0;

  while (word1.join("") != word2.join("")) {
    if (word1[i] != word2[i]) {
      var repS = word2[i];

      if (word1.join("").indexOf(repS) != -1) {
        var tempAbc = abc.split("").filter(w => word1.join("").indexOf(w) == -1);

        if (tempAbc.length == 0) {
          return 0;
        }
        repS = tempAbc.pop();
      }
      word1 = word1.join("").replace(new RegExp(word1[i], "g"), repS).split("");
    }
    i = (i + 1) % word1.length;
  }

  return 1;
};

/*

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', (line) => {

  function result(line) {}

  console.log(String(result(line)));
  rl.close();
  return;
}).on('close', () => process.exit(0));

*/