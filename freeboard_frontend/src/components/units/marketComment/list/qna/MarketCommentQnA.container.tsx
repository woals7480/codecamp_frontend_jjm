import MarketCommentQnAList from "./list/MarketCommentQnAList.container";

interface IMarketCommentQnAProps {
  commentId: string;
}

export default function MarketCommentQnA(props: IMarketCommentQnAProps) {
  const WrapperWidth = 1200;
  return (
    <div>
      <MarketCommentQnAList
        commentId={props.commentId}
        WrapperWidth={WrapperWidth}
      />
    </div>
  );
}
