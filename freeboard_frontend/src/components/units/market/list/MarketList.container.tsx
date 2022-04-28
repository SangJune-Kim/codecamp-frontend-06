// 마켓 목록 컨테이너

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USEDITEMS } from "./MarketList.queries";

export default function MarketList() {
  const { data, fetchMore } = useQuery(FETCH_USEDITEMS);
  const router = useRouter();

  const onClickNewItem = () => {
    router.push("/markets/new");
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/markets/${event.target?.id}`);
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <MarketListUI
      onLoadMore={onLoadMore}
      data={data}
      onClickNewItem={onClickNewItem}
      onClickMoveDetail={onClickMoveDetail}
    />
  );
}
