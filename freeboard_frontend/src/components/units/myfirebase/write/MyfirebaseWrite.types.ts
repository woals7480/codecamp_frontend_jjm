import { ChangeEvent } from "react";

export interface IMyfirebaseWriteUIProps {
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
}
