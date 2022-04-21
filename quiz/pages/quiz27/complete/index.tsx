import { useRouter } from "next/router";

export default function QuizComplete() {
  const router = useRouter();
  const MoreCharge = () => {
    router.push("/quiz27/loading");
  };
  return (
    <>
      <div>충전 완료!!</div>
      <button onClick={MoreCharge}>추가 충전하기</button>
    </>
  );
}
