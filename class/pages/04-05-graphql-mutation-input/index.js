// import axios from "axios";
import { useState } from "react";
import {useMutation, gql} from "@apollo/client";


const CREATE_BOARD = gql`
  mutation createBoard($writer:String,$title:String,$contents:String) {

    createBoard(writer:$writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
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
  }

  const onChangeTitle = (event) =>{
    setMyTitle(event.target.value)

  }

  const onChangeContents = (event) =>{
    setMyContents(event.target.value)

  }


  return (
    <>
      <div>{data}</div>
      작성자: <input type="text" onChange={onChangeWriter} /><br />
      제목: <input type="text" onChange={onChangeTitle} /><br />
      내용: <input type="text" onChange={onChangeContents} /><br />
      <button onClick={callGraphqlApi}>GraphQL-API 요청하기!!!</button>
    </>
  );
}

