import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

const MyStar = styled(Rate)`
  font-size: 80px;
`;

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);

  return (
    <>
      <MyStar onChange={setValue} value={value} />
    </>
  );
}
