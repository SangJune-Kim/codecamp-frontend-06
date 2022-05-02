// 마켓 목록 컨테이너

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USEDITEMS } from "./MarketList.queries";

export default function MarketList() {
  const { data, fetchMore } = useQuery(FETCH_USEDITEMS);
  const router = useRouter();
  const [todaysSession, setTodaySession] = useState([]);
  const DATE = new Date().toISOString().slice(0, 10);

  const onClickNewItem = () => {
    router.push("/markets/new");
  };

  const onClickMoveDetail = (el) => (event) => {
    const todays = JSON.parse(sessionStorage.getItem(`${DATE}`) || "[]");
    const tempToday = todays.filter((todaysEl) => todaysEl._id === el._id);
    if (tempToday.length) {
      router.push(`/markets/${event.currentTarget?.id}`);
      return;
    }
    const { __typename, ...rest } = el;
    todays.push(rest);
    sessionStorage.setItem(`${DATE}`, JSON.stringify(todays));
    router.push(`/markets/${event.currentTarget?.id}`);
  };

  useEffect(() => {
    const todays = JSON.parse(sessionStorage.getItem(`${DATE}`) || "[]");
    setTodaySession(todays);
  }, []);

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
      todaysSession={todaysSession}
    />
  );
}
