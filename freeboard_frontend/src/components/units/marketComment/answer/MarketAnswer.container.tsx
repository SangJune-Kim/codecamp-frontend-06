import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "../answerList/MarketAnswerList.queries";
import MarketCommentAnswerUI from "./MarketAnswer.presenter";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./MarketAnswer.queries";

export default function MarketCommentAnswer(props) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );
  const [contents, setContents] = useState(props.el?.contents || "");
  const [isValid, setIsValid] = useState(false);
  const onChangeContents = (event) => {
    if (event.target.value === "") {
      setIsValid(false);
    } else {
      setContents(event.target.value);
      setIsValid(true);
    }
  };

  const submitAnswer = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props?.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props?.id },
          },
        ],
      });
      setIsValid(false);
      props.setIsAnswer((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const updateAnswer = async () => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionAnswerId: props?.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props?.id },
          },
        ],
      });
      props.setIsEdit(false);
      Modal.success({ content: "댓글이 수정되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <MarketCommentAnswerUI
      onChangeContents={onChangeContents}
      submitAnswer={submitAnswer}
      updateAnswer={updateAnswer}
      isValid={isValid}
      setIsAnswer={props.setIsAnswer}
      contents={contents}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
