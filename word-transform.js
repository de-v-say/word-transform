const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', (line) => {
  function result(line) {
    let words = line.split(' ');

    let beginWord = words[0];
    let endWord = words[1];

    if (beginWord == endWord) {
      return 1;
    }

    if (beginWord.length != endWord.length) {
      return 0;
    }

    if (endWord.length >= 33) {
      let abc = new Set();
      for (char of endWord) {
        if (!abc.has(char)) {
          abc.add(char);
        }
      }
      if (abc.size == 33) {
        return 0;
      }
    }

    let vocabulary = new Map();

    for (let i = 0; i < beginWord.length; i++) {
      if (!vocabulary.has(beginWord[i])) {
        vocabulary.set(beginWord[i], endWord[i]);
      } else if (vocabulary.get(beginWord[i]) != endWord[i]) {
        return 0;
      }
    }

    return 1;
  }
  console.log(String(result(line)));
  rl.close();
  return;
}).on('close', () => process.exit(0));