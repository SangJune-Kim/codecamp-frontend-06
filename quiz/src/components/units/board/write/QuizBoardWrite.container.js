import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {CREATE_BOARD} from "./QuizBoardWrite.queries"
import QuizBoardWriteUI from "./QuizBoardWrite.presenter";


export default function QuizBoardWrite() {
  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD)
  const [isActive,setIsActive] = useState(false)

  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")

  const router = useRouter()

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1"); //rest-api 방식
    try{
        const result = await callApi({
          variables: {writer: myWriter, title: myTitle, contents: myContents}
        }) //graphql-api 방식
          console.log(result);
          console.log(result.data.createBoard.message)
            alert("게시글 등록에 성공했어요")
            alert("상세 페이지로 이동하겠습니다.")
          router.push(`../../../../../quiz/06-02-container-routed/${result.data.createBoard.number}`)
        }catch(error){
          alert(error.message)
        }
    // } finally {
    //       //성공이든 실패든 해야할 내용을 넣어
    // }
    

  };

  const onChangeWriter = (event) =>{
    setMyWriter(event.target.value)
    if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeTitle = (event) =>{
    setMyTitle(event.target.value)
    if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeContents = (event) =>{
    setMyContents(event.target.value)
    if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  return (
    <QuizBoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      isActive={isActive}
    />
  );

}