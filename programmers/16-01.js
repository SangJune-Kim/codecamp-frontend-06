// 음양 더하기
// function solution(absolutes, signs) {
//   let answer = 0;
//   for (let i = 0; i < absolutes.length; i++) {
//     // if(signs[i] === true){
//     //     absolutes[i] = absolutes[i] * 1
//     // }
//     // if(signs[i] === false){
//     //     absolutes[i] = absolutes[i] * -1
//     // }
//     // answer +=  absolutes[i]

//     answer += signs[i] ? absolutes[i] : -absolutes[i];
//   }
//   console.log(answer);
//   return answer;
// }

function solution(absolutes, signs) {
  let answer = absolutes.reduce((acc, cur, i) => {
    console.log(acc, cur, signs[i]);

    return acc + (signs[i] === true ? cur : -cur);
  }, 0);

  return answer;
}
