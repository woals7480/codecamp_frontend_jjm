import axios from "axios";
import { reject } from "lodash";
import Head from "next/head";
import { resolve } from "path";
import { useState } from "react";

export default function CallbackPromiseAsyncawaitPage() {
  const [posts, setPosts] = useState([]);

  const onClickCallback = () => {
    const aa = new XMLHttpRequest();
    aa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aa.send();
    aa.addEventListener("load", (res) => {
      const num = res.target?.response.split(" ")[0];

      const bb = new XMLHttpRequest();
      bb.open("get", `https://koreanjson.com/posts/${num}`);
      bb.send();
      bb.addEventListener("load", (res) => {
        const userId = JSON.parse(res.target?.response).UserId;

        const cc = new XMLHttpRequest();
        cc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        cc.send();
        cc.addEventListener("load", (res) => {
          console.log(JSON.parse(res.target?.response));
          setPosts([...JSON.parse(res.target?.response)]);
        });
      });
    });
  };

  const onClickPromise = () => {
    void axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res) => {
        const num = res.request.response.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = JSON.parse(res.request.response).UserId;
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        setPosts([...JSON.parse(res.request.response)]);
      });
  };

  const onClickAsyncAwait = async () => {
    const aa = await axios.get(`http://numbersapi.com/random?min=1&max=200`);
    const num = aa.request.response.split(" ")[0];
    const bb = await axios.get(`https://koreanjson.com/posts/${num}`);
    const userId = JSON.parse(bb.request.response).UserId;
    const cc = await axios.get(`https://koreanjson.com/posts?userId=${userId}`);
    setPosts([...JSON.parse(cc.request.response)]);
  };

  return (
    <>
      <Head>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      </Head>
      <button onClick={onClickCallback}>Callback</button>
      <button onClick={onClickPromise}>Promise</button>
      <button onClick={onClickAsyncAwait}>Async/Await</button>
      {posts.map((el) => (
        <div key={el.id}>
          <div>제목 : {el.title}</div>
          <div>내용 : {el.content}</div>
        </div>
      ))}
    </>
  );
}
