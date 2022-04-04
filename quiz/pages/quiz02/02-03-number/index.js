// export default function NumberStatePage(){

import { useState } from "react"

//     let handleNumber =function() {
//         const token = String(Math.floor(Math.random() * 100000)).padStart(6,"0")
//         document.getElementById("number").innerText=token
//         console.log(token)
//     }


    
//     return(
//         <div>
//             <div id="number">000000</div>
//             <button onClick={handleNumber}>인증번호전송</button>
//         </div>

//     )


// }

export default function NumberStatePage(){

    const [number,setNumber] =useState("000000")
    
    function handleNumber(){
        const number=(String(Math.floor(Math.random()*1000000)).padStart(6,"0"))
        setNumber(number)
    }
    
    return(
        <div>
            <div >{number}</div>
            <button onClick={handleNumber}>인증번호전송</button>
        </div>

    )
}