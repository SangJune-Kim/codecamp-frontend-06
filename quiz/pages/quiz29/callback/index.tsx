import axios from "axios";
import { useState } from "react";

export default function QuizCallbackPage() {
  const [result, setResult] = useState([]);
  const onClickCallback = () => {
    setResult([]);
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res) => {
      const num = res.target.response?.split(" ")[0];
      const bbb = new XMLHttpRequest();
      bbb.open("get", `https://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const aaa = JSON.parse(res.target.response);
        const userId = aaa.UserId;
        const ccc = new XMLHttpRequest();
        ccc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          const aaa = JSON.parse(res.target.response);
          setResult(aaa);
          console.log(aaa);
        });
      });
    });
  };

  const onClickPromise = () => {
    setResult([]);
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log(res);
        setResult(res.data);
      });
  };

  const onClickAsyncAwait = async () => {
    setResult([]);
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = aaa.data.split(" ")[0];
    const bbb = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = bbb.data.UserId;
    const ccc = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);
    setResult(ccc.data);
  };

  return (
    <>
      <div>
        결과:<button onClick={onClickCallback}>Callback</button>
      </div>
      <div>
        결과:<button onClick={onClickPromise}>Promise</button>
      </div>
      <div>
        결과:<button onClick={onClickAsyncAwait}>Async/Await</button>
      </div>
      {result.map((el) => (
        <div key={el.UserId}>
          <div>{el.title}</div>
          <div>{el.content}</div>
        </div>
      ))}
    </>
  );
}

// 1) callback - XMLHttpRequest 사용
// 2) promise - axios.then() 사용
// 3) async/await - await axios 사용
