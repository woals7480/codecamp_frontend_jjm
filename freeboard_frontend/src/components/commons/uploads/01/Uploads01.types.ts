import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  index: number;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrl: string;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  fileUrl: string;
}
