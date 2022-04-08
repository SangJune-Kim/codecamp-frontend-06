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
  onChangeInput: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleRegister: () => void;
  handleEdit: () => void;
  inputsError: string;
  isOpen: boolean;
  youtubeUrl: string;
  onClickPostCode: (address: Address) => void;
  address: string;
  zipcode: string;
}
