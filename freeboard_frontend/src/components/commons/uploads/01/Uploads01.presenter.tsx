import { IUploads01UIProps } from "./Uploads01.types";

import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styles";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          src={`http://storage.googleapis.com/${props.fileUrl}`}
          onClick={props.onClickUpload}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>+Upload</UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
