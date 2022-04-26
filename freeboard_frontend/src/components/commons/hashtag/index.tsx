import { useState } from "react";

const HashTagPage = () => {
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);
  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };
  // keyCode 구글링해봐

  // 삭제할 때는 map으로 뿌렸으니까 각 인덱스를 메서드로 삭제하거나 하면 되겠지? 클릭으로?
  return (
    <>
      <div>
        <span>
          {hashArr.map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </>
  );
};
export default HashTagPage;
