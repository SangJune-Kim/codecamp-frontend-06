// market write container

import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import { CREATE_USEDITEM_QUESTION } from "./MarketCommentWrite.queries";
import * as yup from "yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { FETCH_USEDITEM_QUESTIONS } from "../list/MarketCommentList.queries";

const schema = yup.object({
  contents: yup
    .string()
    .max(100, "최대 100글자까지 가능합니다.")
    .required("내용을 입력해주세요"),
});

const MarketCommentWrite = () => {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const { register, handleSubmit, formState, watch, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const contentsLength = watch().contents?.length;

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
  return (
    <MarketCommentWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickComment={onClickComment}
      contentsLength={contentsLength}
    />
  );
};
export default MarketCommentWrite;
