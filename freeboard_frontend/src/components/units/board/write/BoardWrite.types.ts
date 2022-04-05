import { ChangeEvent } from "react";

export interface BoardWriteProps {
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickPostCode: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit?: Boolean;
  data?: any;
  handleRegister: () => void;
}

export interface BoardWriteUIProps {
  isEdit?: Boolean;

  data?: any;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickPostCode: () => void;
  handleRegister: () => void;
  handleEdit: () => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  isOpen: boolean;
  address: any;
  zipcode: string;
  youtubeUrl: string;
}
