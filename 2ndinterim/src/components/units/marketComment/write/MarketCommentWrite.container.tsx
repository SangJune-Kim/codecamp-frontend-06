// market write container

import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import { CREATE_USEDITEM_QUESTION } from "./MarketCommentWrite.queries";
import * as yup from "yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "../list/MarketCommentList.queries";

const schema = yup.object({
  contents: yup
    .string()
    .max(100, "최대 100글자까지 가능합니다.")
    .required("내용을 입력해주세요"),
});

const MarketCommentWrite = (props) => {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  const { register, handleSubmit, formState, watch, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const contentsLength = watch().contents?.length;

  // 등록하기
  const onClickComment = async (data) => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      Modal.success({ content: "댓글이 등록되었습니다." });
      setValue("contents", "");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "댓글이 등록되지 않았습니다." });
    }
  };
  // 수정하기
  const onClickUpdateComment = async (data) => {
    try {
      if (!props.el?._id) return;
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemQuestionId: String(props.el._id),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      Modal.success({ content: "댓글이 수정되었습니다." });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "수정되지 않았습니다." });
    }
  };

  return (
    <MarketCommentWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickComment={onClickComment}
      contentsLength={contentsLength}
      // 수정
      isEdit={props.isEdit}
      onClickUpdateComment={onClickUpdateComment}
      el={props.el}
    />
  );
};
export default MarketCommentWrite;
