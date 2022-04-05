// 제일 작은 수 제거하기

// function solution(arr) {

//     if(arr.length === 1){
//         return [-1]
//     }
// return arr.filter((el)=>{

//     return el > Math.min(...arr)
//     })

// }

// function solution(arr) {
//     const answer = [];

//      // 1. 제일 작은 수를 찾기
//      let min = arr[0];
//      for (let i = 1; i < arr.length; i++){
//          if( arr[i]< min ){
//              min = arr[i];
//          }
//      }
//     // 2. 제일 작은 수를 제거
//      for ( let i = 0 ; i < arr.length; i++){
//          if(arr[i] !== min){
//              answer.push( arr[i])
//          }
//      }

//      return answer.length  === 0 ? [-1] : answer

//  }
// function solution(arr) {

//     const min = Math.min(...arr)

//     const answer = arr.filter(num => {
//         return num !== min
//     })

//     return answer.length === 0
//     ? [-1]
//     : answer;

// }
