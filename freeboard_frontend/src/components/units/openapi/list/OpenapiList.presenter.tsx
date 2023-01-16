import * as S from "./OpenapiList.styles";
import { IOpenapiUIProps } from "./OpenapiList.types";

export default function OpenapiListUI(props: IOpenapiUIProps) {
  return (
    <S.Wrapper>
      {props.imgUrls.map((el) => (
        <S.DogImg src={el} key={el} />
      ))}
    </S.Wrapper>
  );
}
