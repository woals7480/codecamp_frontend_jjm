import { canUseLayoutEffect } from "@apollo/client/utilities";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ClassCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("그려지고 나서 실행!!");
  }, []);

  useEffect(() => {
    console.log("변경되고 나서 실행!!");
  }); // 처음에도 실행됨

  useEffect(() => {
    return () => {
      console.log("사라질때 실행!!");
    };
  }, []);

  // 1. 하나로 합치기 가능
  // useEffect(()=>{
  //   console.log("그려지고 나서 실행!!")

  //   return () => {
  //     console.log("사라질때 실행!!")
  //   }
  // },[])

  //  2.useEffect의 잘못된 사용 예제 (1.추가렌더링, 2.무한루프)
  // useEffect(()=>{
  //   setCount(prev => prev + 1)
  // },[count])

  const onClickCountup = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountup}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기!!</button>
    </>
  );
}
