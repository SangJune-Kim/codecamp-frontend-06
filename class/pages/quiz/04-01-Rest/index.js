import axios from "axios";
import {useState} from "react";

// 1. [ REST-API 요청하기 ] 라는 버튼을 만들고, 이 버튼을 클릭했을 때 [https://koreanjson.com/users](https://koreanjson.com/users) 라는 Endpoint에 get 방식으로 요청하여 데이터를 받아보세요.
// 2. 위 1번에서 받은 데이터를 console.log()로 출력해 보세요.
// (혹시, Promise 라고 나오나요? 그렇다면 async/await로 기다려야겠죠??)
const QuizRestPage =() =>{
    const[restData,setRestData] = useState("");
    const[restData2,setRestData2] = useState("");

    
    const onClickRestApi = async() =>{
        const result = await axios.get("https://koreanjson.com/users");

        console.log(result.data) 
        setRestData(result.data[0]) 
        setRestData2(result.data[1].name) 


        // const resultMap = result.data.map((res)=>{
        //     return res.username
        // })
        // console.log(resultMap);
        // setRestData(resultMap);

        // map은 다른 분께 여쭤보고 작성 
        // endpoint가 users로 끝났을 때 콘솔 로그로는 데이터가 다 보이지만 그 상태로는 key 값을 지정할 수 없다
        // 받는 데이터가 배열 속에 객체들이 여러개가 있는 상태로 받는데 원하는 객체의 인덱스 값을 지정해서
        // 객체를 뽑아내고 그 객체에서 key값을 통해 value를 받아와야되는데 어떻게 해야하지
        //(해결)
        // 알려주신 방법은 map으로 res에 들어간 data 값 중에 key 값이 name인 데이터들을 다 받아서
        // name으로 구성된 객체인 resultMap을 만들고 그걸 restData로 선언하니까 화면에 나타남 다른 방법으론 콘솔에만 데이터가 보임

    }

    return(

        <div>
        <div>{restData}</div><div>{restData2}</div>
        <button onClick={onClickRestApi}>REST-API 요청하기</button>
        </div>


    )



}

export default QuizRestPage

