// 마켓 목록 컨테이너

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USEDITEMS } from "./MarketList.queries";

export default function MarketList() {
  const { data } = useQuery(FETCH_USEDITEMS);
  const router = useRouter();

  const onClickNewItem = () => {
    router.push("/markets/new");
  };

  return <MarketListUI data={data} onClickNewItem={onClickNewItem} />;
}
