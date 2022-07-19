function generateHashtag (str) {
  let hashtag = "#"
  let words = str.split(" ").filter(e => e)
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  let nStr = words.join("")
  if (nStr.length == 0 || nStr.length >= 140) {
    return false
  }
  return hashtag + nStr
}
