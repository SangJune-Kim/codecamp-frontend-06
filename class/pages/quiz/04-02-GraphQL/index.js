import axios from "axios";
import { useMutation, gql} from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
    mutation createBoard($writer:String,$title:String,$contents:String){

        createBoard(writer:$writer, title: $title, contents:$contents){
            _id
            number
            message
        }
    }
`


const QuizGraphqlPage = () => {

    const [callApi] = useMutation(CREATE_BOARD)
    const [data,setData] = useState("")
    const [writer,setWriter] = useState("")
    const [title,setTitle] = useState("")
    const [contents,setContents] = useState("")


    const onChangeWriter =(event) =>{
        setWriter(event.target.value)
    }
    const onChangeTitle =(event) =>{
        setTitle(event.target.value)
    }
    const onChangeContents =(event) =>{
        setContents(event.target.value)
    }



    const onClickRequest = async() =>{
        const result = await callApi({
            variables: {writer:writer, title:title, contents: contents}
        })
        console.log(result)
        setData(result.data.createBoard.number)
        console.log(result.data.createBoard.message)

    }

  return (
    <div>
        작성자:<input type="text" onChange={onChangeWriter}/><br />
        제목:<input type="text" onChange={onChangeTitle}/><br />
        내용:<input type="text" onChange={onChangeContents}/><br />
      <div>{data}</div>
      <button onClick={onClickRequest}>GRAPHQL-API요청하기</button>
    </div>
  );
};

export default QuizGraphqlPage;
