import { memo } from "react";

function QuizContainer() {
  console.log("자식이 랜더링 됐어요!");
  return (
    <>
      <div></div>
    </>
  );
}
export default memo(QuizContainer);
