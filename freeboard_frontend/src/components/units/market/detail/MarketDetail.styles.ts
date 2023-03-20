import { HeartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px gray;
  padding: 80px 102px;
`;

export const Header = styled.div`
  width: 100%;
  padding-bottom: 25px;
  border-bottom: 2px solid #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  margin-right: 15px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const CreatedAt = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkIcon = styled.img`
  margin-right: 15px;
`;

export const LocationIcon = styled.img`
  margin-right: 15px;
`;

export const Body = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const Map = styled.div`
  width: 792px;
  height: 360px;
`;

export const ProductDetailWrapper = styled.div`
  margin-top: 30px;
`;

export const ProductImage = styled.img`
  width: 296px;
  height: 296px;
  margin: auto;
`;

export const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #bdbdbd;
  margin-top: 50px;
  padding-top: 30px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const ProductRemarks = styled.span`
  font-size: 13px;
  color: #828282;
  margin-bottom: 8px;
`;
export const ProductPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ProductContents = styled.div``;

export const ProductPickedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
`;

export const PickedIcon = styled(HeartOutlined)`
  font-size: 30px;
  color: gold;
`;

export const PickedCount = styled.span`
  font-size: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;
