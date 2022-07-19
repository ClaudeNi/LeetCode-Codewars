function solution(input, markers) {
  let sentencesArr = input.split("\n")
  let nStr = []
  for (let mark of markers) {
    for (let i = 0; i < sentencesArr.length; i++) {
      if (sentencesArr[i].indexOf(mark) != -1) {
        sentencesArr[i] = sentencesArr[i].substring(0, sentencesArr[i].indexOf(mark)).trim()
      }
    }
  }
  return(sentencesArr.join("\n"))
};
