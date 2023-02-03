import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { IMutation } from "../../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const EmptyFile = styled.button`
  width: 70px;
  height: 70px;
  margin: 10px;
`;

const UploadFile = styled.img`
  width: 70px;
  height: 70px;
  margin: 10px;
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">>(UPLOAD_FILE);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [index, setIndex] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickFile = (event: MouseEvent<HTMLElement>) => {
    fileRef.current?.click();
    setIndex(Number(event.currentTarget.id));
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    try {
      const result = await uploadFile({ variables: { file } });
      onChangeFileUrl(result.data?.uploadFile.url ?? "", index);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeFileUrl = (fileurl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileurl;
    setFileUrls([...newFileUrls]);
  };

  return (
    <>
      {fileUrls.map((el, index) =>
        el ? (
          <UploadFile
            src={`https://storage.googleapis.com/${el}`}
            onClick={onClickFile}
            id={String(index)}
            key={uuidv4()}
          />
        ) : (
          <EmptyFile onClick={onClickFile} id={String(index)} key={uuidv4()}>
            {" "}
            + Upload
          </EmptyFile>
        )
      )}
      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={onChangeFile}
      />
    </>
  );
}
