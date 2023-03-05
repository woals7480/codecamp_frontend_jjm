import { ChangeEvent, useState } from "react";

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // <input type="file" multiple />에서 multiple속성으로 여러개 드래그 가능
    if (!file) return;

    // // 1. 임시URL 생성 => (가짜URL)- 내 브라우저에서만 접근 가능
    // const result = URL.createObjectURL(file);
    // console.log(result);
    // setImageUrl(result);

    // 2. 임시 URL 생성 => (진짜URL)- 다른 브라우저에서도 접근 가능
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result); // 게시판에서 event.target.id 대신 event.currentTaeget.id를 썼던 이유: event.target은 태그만을 가르키지 않음
        setImageUrl(event.target?.result);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <img src={imageUrl} />
    </>
  );
}
