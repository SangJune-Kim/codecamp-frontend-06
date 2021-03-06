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
import { Modal } from "antd";

const BoardCommentListItemUI = (props) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [ModalPassword, setModalPassword] = useState("");

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onToggleDeleteModal = () => {
    setIsDelete((prev) => !prev);
  };

  const onChangeModalPassword = (event) => {
    setModalPassword(event.target.value);
  };

  const onClickDeleteBoardComment = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: ModalPassword,
          boardCommentId: String(props.el._id),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      Modal.success({ content: "댓글 삭제가 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
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
              <S.CommentWriter>
                {props.el?.writer}
                <S.CommentStars>
                  <S.RatingStar disabled value={props.el?.rating} />
                </S.CommentStars>
              </S.CommentWriter>
              <div>
                <S.UpdateIconButton onClick={onClickUpdateBoardComment}>
                  <S.UpdateIcon src="/boards/detail/update.png" />
                </S.UpdateIconButton>
                <S.DeleteIconButton onClick={onToggleDeleteModal}>
                  <S.DeleteIcon src="/boards/detail/delete.png" />
                </S.DeleteIconButton>
                {isDelete && (
                  <Modal
                    title={"비밀번호를 입력하세요"}
                    visible={true}
                    onOk={onClickDeleteBoardComment}
                    onCancel={onToggleDeleteModal}
                  >
                    <input type="password" onChange={onChangeModalPassword} />
                  </Modal>
                )}
              </div>
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
