// 마켓 댓글 목록 컨테이너

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import MarketCommentListUI from "./MarketCommentList.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./MarketCommentList.queries";

const MarketCommentList = () => {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  // console.log(data);
  return <MarketCommentListUI data={data} fetchMore={fetchMore} />;
};
export default MarketCommentList;
