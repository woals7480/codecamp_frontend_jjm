export interface IMarketCommentListUIProps {
  data: {
    _id: string;
    contents: string;
    user: {
      _id: string;
      email: string;
      name: string;
    };
    createdAt: string;
  };
}
