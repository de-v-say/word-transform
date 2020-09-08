const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', (line) => {

  Array.prototype.remove = function () {
    let what, a = arguments, L = a.length, ax;

    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };

  function result(line) {
    let iString = line.split(' ');

    let startWord = iString[0].split('');
    let endWord = iString[1].split('');

    if (startWord == endWord) {
      return 1;
    }

    if (startWord.length != endWord.length) {
      return 0;
    }

    if (endWord.length >= 33) {
      let abc = [
        'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й',
        'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф',
        'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
      ];
      for (let char of endWord) {
        if (abc.indexOf(char) != -1) {
          abc.remove(char);
        }
      }
      if (abc.length == 0) {
        return 0;
      }
    }

    let vocabulary = new Map();

    for (let i = 0; i < startWord.length; i++) {
      if (!vocabulary.has(startWord[i])) {
        vocabulary.set(startWord[i], endWord[i]);
      } else if (vocabulary.get(startWord[i]) != endWord[i]) {
        return 0;
      }
    }

    return 1;
  };

  console.log(String(result(line)));
  rl.close();
  return;
}).on('close', () => process.exit(0));
