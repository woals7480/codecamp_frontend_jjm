export interface ILayoutMypageUIProps {
  userInfo: {
    _id?: string;
    name?: string;
    email?: string;
    userPoint?: {
      _id: string;
      amount: number;
    };
  };
}
