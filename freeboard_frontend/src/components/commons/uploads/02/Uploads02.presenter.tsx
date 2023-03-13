import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads02.styles";
import { IUploads02UIProps } from "./Uploads02.types";

export default function Uploads02UI(props: IUploads02UIProps) {
  return (
    <>
      {props.imageUrl ? (
        <UploadImage onClick={props.onClickFile} src={props.imageUrl} />
      ) : (
        <UploadButton type="button" onClick={props.onClickFile}>
          +Upload
        </UploadButton>
      )}
      <UploadFileHidden
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeFile}
      />
    </>
  );
}
