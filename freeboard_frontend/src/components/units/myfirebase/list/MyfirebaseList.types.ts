import { DocumentData } from "firebase/firestore";

export interface IMyfirebaseListUIProps {
  dataBoards: DocumentData[];
  onClickMoveToBoardNew: () => void;
}
