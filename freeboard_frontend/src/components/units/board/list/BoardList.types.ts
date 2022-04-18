// BoardList Types

import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

// container part
export interface IBoardListUIProps {
  data?: any;
  onClickMoveDetail: (event: MouseEvent<HTMLDivElement>) => void;
  lastPage: Number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
  onClickMoveNewBoard: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  // onClickSearch: (event: MouseEvent<HTMLButtonElement>) => void;
  keyWord?: String;
}
