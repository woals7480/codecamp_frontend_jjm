import styled from "@emotion/styled";
import { useState } from "react";
import { IBoard } from "../../../commons/types/generated/types";

interface IProps {
  el: IBoard;
}

export default function BoardCommentItem(props: IProps) {
  const [isEdit, setIsEdit] = useState(false);

  const Row = styled.div`
    display: flex;
  `;

  const Column = styled.div`
    margin: 5px 10px;
  `;

  const onClickEdit = () => {
    setIsEdit(true);
  };
  return (
    <div>
      {!isEdit && (
        <Row>
          <Column> 제목 :{props.el.title} </Column>
          <Column> 내용 :{props.el.contents} </Column>
          <button onClick={onClickEdit}>수정하기</button>
        </Row>
      )}
      {isEdit && (
        <div>
          수정할 내용 : <input type="text" />
        </div>
      )}
    </div>
  );
}
