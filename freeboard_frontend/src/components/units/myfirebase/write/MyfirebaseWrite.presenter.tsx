import * as S from "./MyfirebaseWrite.styles";
import { IMyfirebaseWriteUIProps } from "./MyfirebaseWrite.types";

export default function MyfirebaseWriteUI(props: IMyfirebaseWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Myfirebase>My Firebase</S.Myfirebase>
      <div>
        작성자 :{" "}
        <S.MyInput id="writer" type="text" onChange={props.onChangeInputs} />
      </div>
      <div>
        제 목 :{" "}
        <S.MyInput id="title" type="text" onChange={props.onChangeInputs} />
      </div>
      <div>
        내 용 :{" "}
        <S.MyInput id="contents" type="text" onChange={props.onChangeInputs} />
      </div>
      <div>
        <S.MyButton onClick={props.onClickSubmit}>등록하기</S.MyButton>
      </div>
    </S.Wrapper>
  );
}
