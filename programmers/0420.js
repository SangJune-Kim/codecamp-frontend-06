//시저암호

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
    } else {
      let idx = alphabet.indexOf(s[i]);
      const word =
        idx > 25 ? alphabet.substring(26) : alphabet.substring(0, 26);
      idx = word.indexOf(s[i]) + n;

      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }

  return answer;
}
