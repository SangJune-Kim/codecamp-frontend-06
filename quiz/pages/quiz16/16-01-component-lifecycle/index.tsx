import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ComponentLifecycleQuiz = () => {
  const router = useRouter();

  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    alert("Rendered!");
  });

  const onClickChange = () => {
    setIsChange((prev) => !prev);
  };

  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);

  const onClickMove = () => {
    router.push("/");
  };
  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);

  return (
    <div>
      <div>{String(isChange)}</div>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </div>
  );
};
export default ComponentLifecycleQuiz;
