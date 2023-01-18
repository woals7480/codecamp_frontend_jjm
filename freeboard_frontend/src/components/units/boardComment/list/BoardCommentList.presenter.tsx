import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentEdit from "../boardCommentEdit/BoardCommentEdit.container";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div style={{ height: "700px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        <div>
          {props.data?.fetchBoardComments.map((el) => (
            <BoardCommentEdit key={el._id} el={el} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
