import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const InfiniteScrollWrapper = styled.div`
  height: 1000px;
  overflow: auto;
  border-bottom: 3px solid gray;
  border-top: 3px solid gray;
`;

export const ProductWrapper = styled.div`
  border-top: 1px solid gray;
  height: 200px;
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  height: 160px;
  width: 15%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 160px;
`;

export const PriceWrapper = styled.div`
  height: 160px;
  width: 15%;
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 160px;
  height: 160px;
`;

export const NoImage = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
`;

export const InfoName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
export const InfoRemarks = styled.div``;

export const InfoPicked = styled.div`
  display: flex;
  align-items: center;
`;

export const PickedIcon = styled.div`
  margin-right: 5px;
  color: gold;
`;

export const PickedCount = styled.div``;

export const InfoPrice = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 40px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  width: 171px;
  height: 52px;
  background-color: white;
  border: 1px solid darkgray;
  border-radius: 10px;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const PencilIcon = styled.img``;
