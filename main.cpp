#include <iostream>
#include <string>
#include <map>
#include <Windows.h>

using namespace std;

int
main()
{
  SetConsoleCP(1251);
  SetConsoleOutputCP(1251);

  string startWord, endWord;
  cin >> startWord >> endWord;

  if (startWord != endWord) {
    if (startWord.size() != endWord.size()) {
      cout << 0 << endl;
    }

    if (endWord.size() >= 33) {
      string abc = "אבגדהו¸זחטיךכלםמןנסעףפץצקרשתûü‎‏ÿ";
      for (const auto& c : endWord) {
        if (abc.find(c) != string::npos) {
          abc.erase(abc.find(c));
        }
        if (abc.empty()) {
          cout << 0 << endl;
        }
      }
    }

    map<char, char> vocabulary;

    for (int i = 0; i < startWord.size(); i++) {
      if (vocabulary.find(startWord[i]) == vocabulary.end()) {
        vocabulary[startWord[i]] = endWord[i];
      } else if (vocabulary[startWord[i]] != endWord[i]) {
        cout << 0 << endl;
      }
    }
  }
  cout << 1 << endl;

  return 0;
}