// spice

// 1. 배열 메서드
// 2. 원하는 위치(인덱스)의 데이터를 제거하거나 추가할 수 있다.
// 3. 원본이 저장됨

// 완주하지 못한 선수

// function solution(participant, completion) {
//   for (let i = 0; i < completion.length; i++) {
//     participant.splice(participant.indexOf(completion[i]), 1);
//   }

//   return participant[0];
// }

// 해시 방식
// function solution(participant, completion) {
//   const answer = [];
//   for (let i = 0; i < participant.length; i++) {
//     answer[participant[i]] === undefined
//       ? (answer[participant[i]] = 1)
//       : answer[participant[i]]++;
//   }

//   // 완주한 명단에서 선수 이름을 제거
//   for (let i = 0; i < completion.length; i++) {
//     if (answer[completion[i]]) {
//       answer[completion[i]]--;
//     }
//   }
//   for (let key in answer) {
//     if (answer[key] !== 0) {
//       return key;
//     }
//   }
// }

// function solution(participant, completion) {
//   participant.sort((a, b) => (a > b ? 1 : -1));
//   completion.sort();

//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] !== completion[i]) {
//       return participant[i];
//     }
//   }
// }

function solution(participant, completion) {
  participant.sort((a, b) => (a > b ? 1 : -1));
  completion.sort();

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}
