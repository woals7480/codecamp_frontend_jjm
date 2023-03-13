import { ChangeEvent, useRef } from "react";
import Uploads02UI from "./Uploads02.presenter";
import { IUploads02Props } from "./Uploads02.types";

export default function Uploads02(props: IUploads02Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickFile = () => {
    fileRef.current?.click();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const result = URL.createObjectURL(file);

    props.onChangeFileUrls(result, file, props.index);
  };

  return (
    <Uploads02UI
      imageUrl={props.imageUrl}
      fileRef={fileRef}
      onClickFile={onClickFile}
      onChangeFile={onChangeFile}
    />
  );
}
