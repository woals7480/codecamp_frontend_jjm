import axios from "axios";

export default function RestApiPage() {
  const onClickSync = async () => {
    const data = await axios.get("https://koreanjson.com/posts/1");
    console.log(data);
  };

  return (
    <>
      <button onClick={onClickSync}>REST-API 요청하기</button>
    </>
  );
}
