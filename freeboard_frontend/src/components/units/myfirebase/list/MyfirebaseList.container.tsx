import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../../commons/libraries/firebase";
import MyfirebaseListUI from "./MyfirebaseList.presenter";

export default function MyfirebaseList() {
  const router = useRouter();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchBoard = async () => {
      const board = await getDocs(collection(db, "board"));
      const boards = board.docs.map((el) => el.data());
      setDataBoards(boards);
    };
    void fetchBoard();
  }, []);

  const onClickMoveToBoardNew = () => {
    void router.push("/myfirebase/new");
  };

  return (
    <MyfirebaseListUI
      dataBoards={dataBoards}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}
