import MarketListUI from "./MarketList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { FETCH_USEDITEMS } from "./MarketList.queries";

export default function MarketList() {
  const { data, fetchMore } = useQuery(FETCH_USEDITEMS);
  const router = useRouter();
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
      data={data}
      fetchMore={fetchMore}
      onClickMoveDetail={onClickMoveDetail}
      onLoadMore={onLoadMore}
    />
  );
}
