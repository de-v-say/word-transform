#include <iostream>
#include <string>
#include <map>
#include <Windows.h>

using namespace std;

bool
is_converted(const string& startWord, const string& endWord)
{
  if (startWord != endWord) {
    if (startWord.size() != endWord.size()) {
      return false;
    }

    if (endWord.size() >= 33) {
      string abc = "אבגדהו¸זחטיךכלםמןנסעףפץצקרשתûü‎‏ÿ";
      for (const auto& c : endWord) {
        if (abc.find(c) != string::npos) {
          abc.erase(abc.find(c));
        }
        if (abc.empty()) {
          return false;
        }
      }
    }

    map<char, char> vocabulary;

    for (int i = 0; i < startWord.size(); i++) {
      if (vocabulary.find(startWord[i]) == vocabulary.end()) {
        vocabulary[startWord[i]] = endWord[i];
      } else if (vocabulary[startWord[i]] != endWord[i]) {
        return false;
      }
    }
  }
  return true;
}

int
main()
{
  SetConsoleCP(1251);
  SetConsoleOutputCP(1251);

  string startWord, endWord;
  cin >> startWord >> endWord;

  
  cout << is_converted(startWord, endWord) << endl;

  return 0;
}