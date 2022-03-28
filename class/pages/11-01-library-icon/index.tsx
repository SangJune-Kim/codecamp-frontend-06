import { CheckOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(CheckOutlined)`
  font-size: 50px;
  color: red;
`;

export default function LibraryIconPage() {
  return (
    <div>
      <MyIcon />
    </div>
  );
}
