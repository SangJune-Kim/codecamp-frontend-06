import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USEDITEM } from "../../../../src/components/units/market/detail/MarketDetail.queries";

export default function MarketEdit() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  return <MarketWrite isEdit={true} data={data} />;
}
