import styled from "@emotion/styled";
import { ISoldout } from "./MarketList.types";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  position: relative;
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
  cursor: pointer;
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

export const ViewItemsWrapper = styled.div`
  width: 192px;
  border: 1px solid #bdbdbd;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: -320px;
  top: 0;
`;

export const ViewItemsTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ViewitemWrapper = styled.div`
  width: 156px;
  border: 1px solid #bdbdbd;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ViewitemPickedWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ViewitemPickedIcon = styled.div`
  color: gold;
  margin-right: 5px;
`;
export const ViewitemPickedCount = styled.div``;

export const ViewitemImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ViewitemImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const ViewitemNoImage = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
`;

export const ViewitemText = styled.div``;

export const ViewitemName = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;
export const ViewitemRemarks = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;
export const ViewitemPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const SoldoutWrapper = styled.div`
  margin: 10px;
`;

export const SoldoutText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props: ISoldout) => (props.isSold ? "gold" : "black")};
  cursor: pointer;
`;
