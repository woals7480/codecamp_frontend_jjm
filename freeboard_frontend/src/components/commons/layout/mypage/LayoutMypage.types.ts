import { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutMypageUIProps {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}
