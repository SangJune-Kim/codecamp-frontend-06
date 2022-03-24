import BoardWriteUI from "./BoardWrite.presenter"
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation} from "@apollo/client";
import { CREATE_BOARD} from "./BoardWrite.queries"

const BoardWrite = () =>{

    const [writer, setWriter] = useState("");
    const [writerError, setWriterError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [content, setContent] = useState("");
    const [contentError, setContentError] = useState("");
    
    const router = useRouter()
    
    const [createBoard] =useMutation(CREATE_BOARD)

    const onChangeWriter = (event) => {
      setWriter(event.target.value);
      if (event.target.value === "") {
        setWriterError("작성자를 작성하세요.");
      } else {
        setWriterError("");
      }
    };
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
      if (event.target.value === "") {
        setPasswordError("비밀번호를 입력하세요.");
      }
      else {
        setPasswordError("");
      }
    };
  
    const onChangeTitle = (event) => {
      setTitle(event.target.value);
      if (event.target.value === "") {
        setTitleError("제목을 작성하세요.");
      } else {
        setTitleError("");
      }
    };
  
    const onChangeContent = (event) => {
      setContent(event.target.value);
      if (event.target.value === "") {
        setContentError("내용을 작성하세요.");
      } else {
        setContentError("");
      }
    };
  
    const handleRegister = async () => {
      if (writer === "") {
        setWriterError("작성자를 입력하세요.");
      } else {
        setWriterError("");
      }
      if (password === "") {
        setPasswordError("비밀번호를 입력하세요.");
      } else {
        setPasswordError("");
      }
      if (title === "") {
        setTitleError("제목을 입력하세요.");
      } else {
        setTitleError("");
      }
      if (content === "") {
        setContentError("내용을 입력하세요.");
      } else {
        setContentError("");
      }
      if (writer === "" || password === "" || title === "" || content === "") {
        alert("작성할 곳이 남아있습니다.");
      }
      if (
        writer !== "" && password !== "" && title !== "" && content !== ""   ) {
        try{
        const result = await createBoard({
          variables: {createBoardInput:
            {writer: writer, password: password, title: title, contents: content}
          }
        })
        alert("가입이 완료되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`)
      }catch(error){
          alert(error.message)
      }

      }}

    return (
        <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangePassword={onChangePassword}
        onChangeContent={onChangeContent}
        handleRegister={handleRegister}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentError={contentError}
        />
    )
    
}
export default BoardWrite