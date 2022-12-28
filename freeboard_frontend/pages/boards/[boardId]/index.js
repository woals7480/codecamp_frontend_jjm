import { gql } from "@apollo/client";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";

import {
  Avatar,
  AvatarWrapper,
  CardWrapper,
  Header,
  Wrapper,
  Info,
  CreatedAt,
  Writer,
  Body,
  Contents,
  Title,
  ButtonWrapper,
  Button,
} from "../../../styles/emotion-detail";

export default function BoardDetailPage() {
  return <BoardDetail />;
}
