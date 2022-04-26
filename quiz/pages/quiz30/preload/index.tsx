import { useState, useRef, useEffect } from "react";

export default function QuizPreLoadPage() {
  const divRef = useRef(null);
  const [imgTag, setImgTag] = useState<HTMLImageElement>();

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0Ae3DZ67dxAAjCnupYmVbnXSzp6Y18hLDw&usqp=CAU";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickShow = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  return (
    <>
      <div>
        <button onClick={onClickShow}>이미지 보여주기</button>
        <div ref={divRef}></div>
      </div>
    </>
  );
}
