import { useCallback, useMemo, useState } from "react";
import QuizContainer from "./container";

export default function QuizMemoization() {
  let countLet = 0;

  const letCount = useMemo(() => {
    console.log(countLet);
    countLet = 0;
    return () => {
      countLet = countLet + 1;
    };
  }, [countLet]);

  const [countState, setCountState] = useState(0);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1, "let");
    letCount();
  }, []);
  //   const onClickCountState = useMemo(() => {
  //     return () => {
  //       setCountState((prev) => prev + 1);
  //     };
  //   }, []);

  return (
    <>
      <div>{countLet}</div>
      <button onClick={onClickCountLet}>countLet +1</button>
      <div>{countState}</div>
      <button
        onClick={() => {
          setCountState((prev) => prev + 1);
          console.log(countState + 1, "state");
        }}
      >
        countState +1
      </button>
      <QuizContainer />
    </>
  );
}
