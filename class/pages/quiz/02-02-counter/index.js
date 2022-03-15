// export default function CounterStateQuiz(){

import { useState } from "react"

//     let count= 0

//     function counter(){
//         count = count + 1
//         document.getElementById("count").innerText = count
        
//     }


//     return(
//         <>
//         <div id="count">{count}</div>
//         <button onClick={counter}>카운트증가</button>
//         </>

//     )
// }

export default function CounterStateQuiz(){

    const [count,setCount]= useState(0)

    function handleCount(){
        setCount(count+1)
    }

    return(
        <>
        <div>{count}</div>
        <button onClick={handleCount}>카운트증가</button>
        </>

    )
}