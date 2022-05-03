import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import { FETCH_USER_LOGGED_IN } from "../../../commons/payment/Payment.queries";
import { FETCH_USEDITEM } from "../../market/detail/MarketDetail.queries";
import MarketCommentAnswer from "../answer/MarketAnswer.container";
import AnswerList from "../answerList/MarketAnswerList.container";
import MarketCommentWrite from "../write/MarketCommentWrite.container";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./MarketCommentList.queries";
import * as S from "./MarketCommentList.styles";

const MarketCommentListItemUI = (props) => {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);

  const { data: useditemData } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  const onClickDeleteComment = async (event) => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: String(event.currentTarget.id) },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "삭제가 완료되지 않았습니다." });
    }
  };

  const onClickUpdateComment = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  return (
    <>
      {!isEdit && (
        <S.CommentFetchWrapper>
          <S.CommentProfileImg src="/Profile.png" />
          <S.CommentContentsBox>
            <S.CommentFetchHeader>
              <S.CommentWriter>{props.el?.user.name}</S.CommentWriter>
              <div>
                {useditemData?.fetchUseditem.seller._id ===
                  loginData?.fetchUserLoggedIn._id && (
                  <button onClick={onClickAnswer}>답변하기</button>
                )}
                <S.UpdateIconButton onClick={onClickUpdateComment}>
                  <S.UpdateIcon src="/images/update.png" />
                </S.UpdateIconButton>
                <S.DeleteIconButton
                  id={props.id}
                  onClick={onClickDeleteComment}
                >
                  <S.DeleteIcon src="/images/delete.png" />
                </S.DeleteIconButton>
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
        <MarketCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
      {isAnswer && (
        <MarketCommentAnswer setIsAnswer={setIsAnswer} id={props.id} />
      )}
      <AnswerList id={props.id} />
    </>
  );
};
export default MarketCommentListItemUI;
