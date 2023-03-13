import { ChangeEvent, RefObject } from "react";

export interface IUploads02Props {
  index: number;
  imageUrl: string;
  onChangeFileUrls: (fileUrl: string, file: File, index: number) => void;
}

export interface IUploads02UIProps {
  imageUrl: string;
  fileRef: RefObject<HTMLInputElement>;
  onClickFile: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
