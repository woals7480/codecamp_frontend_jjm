// 개발자일때 => 디스코드 개발자

import axios from "axios";

export default function OpengraphDeveloperPage() {
  const onClickenter = async () => {
    // 1. 채팅데이터에 주소가 있는지 찾기(ex, https:// 로 시작하는 것)

    // 2. 해당 주소로 스크래핑하기
    const result = await axios.get("https://www.gmarket.co.kr");
    console.log(result);

    // 3. 메타태그에서 오플그래스(og:) 찾기
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og:"))
    );
  };

  return (
    <>
      <button onClick={onClickenter}>채팅입력 후 엔터치기!!</button>
    </>
  );
}
