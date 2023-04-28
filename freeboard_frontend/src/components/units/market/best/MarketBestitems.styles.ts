import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
`;

export const TItle = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-top: 80px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const ItemWrapper = styled.div`
  width: 282px;
  height: 391px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 242px;
  height: 242px;
`;

export const Image = styled.img`
  width: 242px;
  height: 242px;
`;

export const NoImage = styled.div`
  width: 242px;
  height: 242px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextWrapper = styled.div``;

export const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Remarks = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  color: #4f4f4f;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const PickedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const PickedIcon = styled.div`
  color: gold;
`;

export const PickedCount = styled.div``;
