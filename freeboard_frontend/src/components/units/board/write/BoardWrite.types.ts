import { ChangeEvent } from "react";
import { Address } from "react-daum-postcode";

export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: any;
}

export interface IBoardWriteUIProps {
  isEdit?: boolean;
  data?: any;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeFileUrls: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRegister: () => void;
  handleEdit: () => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  isOpen: boolean;
  youtubeUrl: string;
  onClickPostCode: (address: Address) => void;
  onClickUploadFile: () => void;
  onClickModal: () => void;
  address: string;
  zipcode: string;
  fileRef: string;
}
