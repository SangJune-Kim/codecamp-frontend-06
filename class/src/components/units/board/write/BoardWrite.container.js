import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import {useMutation} from "@apollo/client";
// import BoardWrite from "../../src/components/units/board/write/BoardWrite.container";
import { CREATE_BOARD } from "./BoardWrite.queries";



export default function BoardWrite() {
    const [isActive,setIsActive] = useState(false)

    const [data, setData] = useState("");
    const [callApi] = useMutation(CREATE_BOARD)

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")


    const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1"); //rest-api 방식
    const result = await callApi({
        variables: {writer: myWriter, title: myTitle, contents: myContents}
    }) //graphql-api 방식
    console.log(result);
    console.log(result.data.createBoard.message)
    setData(result.data.createBoard.message)
    };

    const onChangeWriter = (event) =>{
    setMyWriter(event.target.value)
      if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
        setIsActive(true)
      } else{
        setIsActive(false)
      }
    }

    const onChangeTitle = (event) =>{
    setMyTitle(event.target.value)
      if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
        setIsActive(true)
      }else{
        setIsActive(false)
      }

    }

    const onChangeContents = (event) =>{
    setMyContents(event.target.value)
      if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
        setIsActive(true)
      }else{
        setIsActive(false)
      }
    }

    return (
      <BoardWriteUI 
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      isActive ={isActive}
      />
    );
  }
