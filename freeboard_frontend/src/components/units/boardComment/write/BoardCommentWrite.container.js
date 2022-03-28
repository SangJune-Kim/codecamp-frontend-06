import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const BoardCommentWrite = (props) => {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [commentRating, setCommentRating] = useState(1);

  const onChangeCommentWriter = (event) => {
    setCommentWriter(event.target.value);
  };
  const onChangeCommentPassword = (event) => {
    setCommentPassword(event.target.value);
  };
  const onChangeCommentContents = (event) => {
    setCommentContents(event.target.value);
  };

  const onClickBoardCommentRegister = async () => {
    if (
      commentWriter === "" ||
      commentPassword === "" ||
      commentContents === ""
    ) {
      alert("작성할 부분이 남았습니다.");
    }
    if (
      commentWriter !== "" &&
      commentPassword !== "" &&
      commentContents !== ""
    ) {
      try {
        await createBoardComment({
          variables: {
            boardId: String(router.query.boardId),
            createBoardCommentInput: {
              writer: commentWriter,
              password: commentPassword,
              contents: commentContents,
              rating: commentRating,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: String(router.query.boardId) },
            },
          ],
        });
        alert("댓글이 등록되었습니다.");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickBoardCommentUpdate = async () => {
    if (!commentContents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!commentPassword) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }
    try {
      if (!props.el?._id) return;
      await updateBoardComment({
        variables: {
          password: String(commentPassword),
          boardCommentId: props.el?._id,
          updateBoardCommentInput: {
            contents: commentContents,
            rating: commentRating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      alert("댓글이 수정되었습니다.");
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      onClickBoardCommentRegister={onClickBoardCommentRegister}
      onClickBoardCommentUpdate={onClickBoardCommentUpdate}
      commentContents={commentContents}
      commentPassword={commentPassword}
      commentWriter={commentWriter}
      isEdit={props.isEdit}
    />
  );
};
export default BoardCommentWrite;
