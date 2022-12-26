import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove301 = () => {
    router.push("/05-08-dynamic-routed-board-query/301");
  };

  const onClickMove302 = () => {
    router.push("/05-08-dynamic-routed-board-query/302");
  };

  const onClickMove303 = () => {
    router.push("/05-08-dynamic-routed-board-query/303");
  };

  const onClickMove400 = () => {
    router.push("/05-08-dynamic-routed-board-query/400");
  };

  return (
    <>
      <button onClick={onClickMove301}>301번 게시글로 이동</button>
      <br />
      <button onClick={onClickMove302}>302번 게시글로 이동</button>
      <br />
      <button onClick={onClickMove303}>303번 게시글로 이동</button>
      <br />
      <button onClick={onClickMove400}>400번 게시글로 이동</button>
    </>
  );
}
