import { useEffect, useRef } from "react";

const UseRefPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <div>인풋창 자동 커서</div>
      <input type="password" ref={inputRef} />
    </div>
  );
};
export default UseRefPage;
