import { RefObject } from "react";
import { Address } from "react-daum-postcode";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  zipcode: string;
  address: string;
  addressDetail: string;
}

export interface IMarketWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

export interface IMarketWriteUIProps {
  onClickSubmit: (data: IFormData) => void;
  onClickEdit: (data: IFormData) => void;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  formState: FormState<IFormData>;
  onChangeContents: (value: string) => void;
  onToggleModal: () => void;
  isOpen: boolean;
  onCompleteAddressSearch: (data: Address) => void;
  imageUrls: string[];
  fileRef: RefObject<HTMLInputElement>;
  onChangeFileUrls: (fileUrl: string, file: File, index: number) => void;
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit: boolean;
}
