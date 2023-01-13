import { RightCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(RightCircleOutlined)`
  color: green;
  font-size: 50px;
`;

export default function LibraryIconPage() {
  return (
    <>
      <MyIcon />
    </>
  );
}
