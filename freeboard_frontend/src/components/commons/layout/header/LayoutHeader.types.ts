import { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderUIProps {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  accessToken: string;
}
