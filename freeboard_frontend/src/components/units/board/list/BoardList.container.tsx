// 목록 컨테이너 페이지
import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  MouseEvent,
  useState,
  // , useState
} from "react";
import _ from "lodash";

const BoardList = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const router = useRouter();
  const { data: dataBoardsCount, refetch: refetchCount } =
    useQuery(FETCH_BOARDS_COUNT);
  const [keyWord, setKeyWord] = useState("");

  // const [searchInput, setSearchInput] = useState("");
  // state를 만들어서 refetch를 안해도 useState로 리랜더 되게 하면 새롭게 불러온다.
  // 아니면 RefetchQueries를써서
  // 아니면 새로운 state를 만들어서 search에다가 넣어줘 <- refetch를 새로운 이름으로 지정해서 넣어줬음

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickMoveNewBoard = () => {
    router.push("/boards/new");
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data });
    setKeyWord(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // setSearchInput(event.target.value);
    refetch({ search: event.target.value });
    refetchCount({ search: event.target.value });
  };

  // const onClickSearch = () => {
  //   refetch({ search: searchInput });
  // };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      lastPage={lastPage}
      onChangeSearch={onChangeSearch}
      // onClickSearch={onClickSearch}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveNewBoard={onClickMoveNewBoard}
      keyWord={keyWord}
    />
  );
};
export default BoardList;
