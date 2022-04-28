// 중고마켓 수정 페이지

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USEDITEM } from "../../../../src/components/units/market/detail/MarketDetail.queries";
import MarketNew from "../../../../src/components/units/market/write/MarketWrite.container";

export default function MarketEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  return (
    <>
      <MarketNew isEdit={true} data={data} />
    </>
  );
}
