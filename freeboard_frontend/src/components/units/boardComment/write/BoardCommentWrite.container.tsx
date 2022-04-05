import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";

const BoardCommentWrite = (props) => {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [commentRating, setCommentRating] = useState(0);

  const onChangeCommentWriter = (event) => {
    setCommentWriter(event.target.value);
  };
  const onChangeCommentPassword = (event) => {
    setCommentPassword(event.target.value);
  };
  const onChangeCommentContents = (event) => {
    setCommentContents(event.target.value);
  };

  const onChangeRate = (value) => {
    setCommentRating(value);
  };

  const onClickBoardCommentRegister = async () => {
    if (
      commentWriter === "" ||
      commentPassword === "" ||
      commentContents === "" ||
      !commentRating
    ) {
      Modal.error({ content: "작성할 부분이 남았습니다." });
    }
    if (
      commentWriter !== "" &&
      commentPassword !== "" &&
      commentContents !== "" &&
      commentRating
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
        Modal.success({ content: "댓글이 등록되었습니다." });
        setCommentWriter("");
        setCommentPassword("");
        setCommentContents("");
        setCommentRating(0);
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const onClickBoardCommentUpdate = async () => {
    if (!commentContents) {
      Modal.error({ content: "내용이 수정되지 않았습니다." });
      return;
    }
    if (!commentPassword) {
      Modal.error({ content: "비밀번호가 입력되지 않았습니다." });
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
      Modal.success({ content: "댓글이 수정되었습니다." });

      props.setIsEdit?.(false);
    } catch (error) {
      Modal.error({ content: error.message });
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
      commentRating={commentRating}
      isEdit={props.isEdit}
      onChangeRate={onChangeRate}
      el={props.el}
    />
  );
};
export default BoardCommentWrite;
