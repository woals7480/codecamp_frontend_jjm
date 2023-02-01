import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchProduct">;
}

export interface IProductWriteUIProps {
  onChangeSeller: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchProduct">;
}

export interface IUpdateProductInputProps {
  name?: string;
  detail?: string;
  price?: number;
}
