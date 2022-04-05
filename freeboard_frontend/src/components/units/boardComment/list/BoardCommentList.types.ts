// 댓글 목록 타입

import {
  ApolloQueryResult,
  FetchMoreOptions,
  FetchMoreQueryOptions,
} from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export interface BoardCommentListUIProps {
  // fetchMore: (arg0: {
  //   variables: { page: number };
  //   updateQuery: (
  //     prev: any,
  //     { fetchMoreResult }: { fetchMoreResult: any }
  //   ) => { fetchBoardComments: any[] };
  // }) => void;
  data?: Pick<IQuery, "fetchBoardComments">;
  fetchMore: (
    FetchMoreOptions: FetchMoreQueryOptions<
      IQueryFetchBoardCommentsArgs,
      Pick<IQuery, "fetchBoardComments">
    > &
      FetchMoreOptions<Pick<IQuery, "fetchBoardComments">>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardComments">>>;
}
