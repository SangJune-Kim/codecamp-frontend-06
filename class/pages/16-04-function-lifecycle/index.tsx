import { Component, createRef, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

interface IState {
  count: number;
}

export default function CounterPage() {
  const router = useRouter();

  // inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState(0);

  // 1. DidMount
  // componentDidMount() {
  //   console.log("마운트됨!!!");
  //   this.inputRef.current?.focus();
  //   // 포커스 깜빡깜빡
  // }
  // useEffect(() => {
  //   console.log("마운트됨!!!");
  //   inputRef.current?.focus();
  // }, []);

  // 2. DidUpdate
  // componentDidUpdate() {
  //   console.log("수정되고 다시그려짐!!!");
  // }
  useEffect(() => {
    console.log("수정되고 다시그려짐!!!");
  });
  // DidUpdate와 완전히 같진 않은데 useEffect는 처음에도 실행됌

  // 3. WillUnmount
  // componentWillUnmount() {
  //   console.log(" 컴포넌트사라짐!!!");
  //   // 채팅방 나가기
  //   // api 요청!!
  // }
  // useEffect(() => {
  //   return () => {
  //     console.log(" 컴포넌트사라짐!!!");
  //   };
  // }, []);

  // 4. DidMount와 WillUnmount를 합치기!!!
  useEffect(() => {
    console.log("마운트됨!!!");
    inputRef.current?.focus();

    return () => {
      console.log(" 컴포넌트사라짐!!!");
    };
  }, []);

  // 5. useEffect의 잘못된 사용 예(1. 추가 렌더링, 2. 무한 루프 )
  // useEffect(() => {
  //   setCount(10);
  // }, []);
  // 이렇게 사용하면 불필요한 랜더링을 하기 때문에 useState를 권장하지 않음
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);
  // 바뀔때 마다 새롭게 랜더링이 되고 count가 또 바뀌었기 때문에 다시 랜더링.. 반복이 됨

  const onClickCounter = () => {
    // console.log(this.state.count);
    // this.setState((prev: IState) => ({
    //   count: this.state.count + 1,
    // }));

    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    // Router.push("/");
    router.push("/");
  };

  console.log("나는 언제 실행되게?");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
