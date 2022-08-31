function duplicateEncode(word){
  let checker = false;
  let nStr = "";
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < word.length; j++) {
        if (word[i].toLowerCase() == word[j].toLowerCase() && i != j) {
          checker = true;
        }
      }
      if (checker == true) {
        nStr += ")";
      } else {
        nStr += "(";
      }
      checker = false;
    }
  return nStr;
}
