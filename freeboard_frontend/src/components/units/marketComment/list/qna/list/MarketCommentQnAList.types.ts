export interface IMarketCommentQnAListProps {
  commentId: string;
  WrapperWidth: number;
}

export interface IMarketCommentQnAListUIProps {
  data: {
    _id: string;
    contents: string;
    user: {
      _id: string;
      name: string;
    };
  };
  WrapperWidth: number;
}
