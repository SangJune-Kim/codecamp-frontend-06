// // 2016년 요일 구하기

// const month = {
//     1 : 31,
//     2 : 29,
//     3 : 31,
//     4 : 30,
//     5 : 31,
//     6 : 30,
//     7 : 31,
//     8 : 31,
//     9 : 30,
//     10 : 31,
//     11 : 30,
//     12 : 31
// }

// const week = ["FRI", "SAT","SUN","MON","TUE","WED","THU" ]

// function solution(a, b) {
//     // 1월 1일 : 금요일
//     // 0+ 1월 1일 : 금요일 (+0)
//     // 1+ 1월 2일 : 토요일 (+1)
//     // 2+ 1월 3일 : 일요일 (+2)
//     // 3+ 1월 4일 : 월요일 (+3)
//     // .....
//     // 7+ 1월 8일 : 금요일 (+0)
//     // 8+ 1월 9일 : 토요일 (+1)
//    let answer = 0;

//     for( let i = 1; i < a; i++){
//         answer += month[i];
//     }

//     answer += b -1;

//     return week[answer % 7];
// }
// 날짜 관련 데이터는 고정되어 있는 값을 확인해서 그 값의 나머지로 계산해봐
// 요일이 고정되어 있고 7개니까 위처럼 계산 할 수 있음

// function solution(a, b) {
//     const answer = new Array(a). fill(1)
//                         .reduce( (acc, cur, i) => {
//                             const mn = cur +i
//                             return acc + (
//                                 mn !== a
//                                 // a월 이전일 때
//                                 ? month[mn]
//                                 // a월 일 때
//                                 : b-1
//                             )
//                         },0)

//     return week[ answer % 7]

// }

// const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]

// function solution(a, b) {
//   const answer = new Date(2016, a -1, b).getDay();
//     return week[answer]
// }
