import { useState } from "react";

const StatePrevPage = () => {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount((prev) => prev + 1);
    // 여기서 prev는 임시저장공간에 들어간 변수의 값 0을 가져옴
    setCount((prev) => prev + 1);
    // 여기서 prev는 이전 setCount에서 넣은 임시저장공간에 들어간 변수의 값 1을 가져옴
    setCount((prev) => prev + 1);
    // 여기서 prev는 이전 setCount에서 넣은 임시저장공간에 들어간 변수의 값 2을 가져옴
    setCount((prev) => prev + 1);
    // 여기서 prev는 이전 setCount에서 넣은 임시저장공간에 들어간 변수의 값 3을 가져옴
    // 이러면 4씩 증가하는 함수가 됌
  };

  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCount}>카운트 올리기</button>
    </div>
  );
};
export default StatePrevPage;
