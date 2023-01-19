import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { db } from "../../../../commons/libraries/firebase";
import MyfirebaseWriteUI from "./MyfirebaseWrite.presenter";

export default function MyfirebaseWrite() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickSubmit = async () => {
    try {
      const board = await addDoc(collection(db, "board"), {
        ...inputs,
      });
      alert("게시글이 등록되었습니다.!!");
      void router.push("/myfirebase");
      console.log(board);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <MyfirebaseWriteUI
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
    />
  );
}
