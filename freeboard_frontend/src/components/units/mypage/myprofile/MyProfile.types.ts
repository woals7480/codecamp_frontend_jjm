export interface IMyProfilePageUIProps {
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
