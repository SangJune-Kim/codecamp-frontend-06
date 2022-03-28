import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

const BoardCommentListItemUI = (props) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickDeleteBoardComment = async () => {
    const PromptPassword = prompt("비밀번호를 입력하세요", "");
    try {
      await deleteBoardComment({
        variables: {
          password: PromptPassword,
          boardCommentId: String(props.el._id),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdateBoardComment = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <S.CommentFetchWrapper>
          <S.CommentProfileImg src="/Profile.png" />
          <S.CommentContentsBox>
            <S.CommentFetchHeader>
              <S.CommentWriter>{props.el?.writer}</S.CommentWriter>
              <S.CommentStars>
                <S.UpdateIconButton onClick={onClickUpdateBoardComment}>
                  <S.UpdateIcon src="/boards/detail/update.png" />
                </S.UpdateIconButton>
                <S.DeleteIconButton onClick={onClickDeleteBoardComment}>
                  <S.DeleteIcon src="/boards/detail/delete.png" />
                </S.DeleteIconButton>
              </S.CommentStars>
            </S.CommentFetchHeader>
            <S.CommentContents>{props.el?.contents}</S.CommentContents>
            <S.CommentCreatedAt>
              {getDate(props.el?.createdAt)}
            </S.CommentCreatedAt>
          </S.CommentContentsBox>
        </S.CommentFetchWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
};
export default BoardCommentListItemUI;
