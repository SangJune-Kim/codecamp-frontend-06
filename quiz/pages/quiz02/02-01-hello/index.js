// export default function HelloStateQuiz(){

import { useState } from "react"

//     function hello(){
//       document.getElementById("hello").innerText="반갑습니다"
//     }


//     return(
//         <>
//             <button id="hello" onClick={hello}>안녕하세요</button>
//         </>

//     )

// }

export default function HelloStateQuiz(){

    const [hello,setHello] =useState("안녕하세요")

    function handleClick(){
        setHello("반갑습니다")
    }

    return(
        <>
            <button onClick={handleClick}>{hello}</button>
        </>

    )
}
