import { useCount } from "../../../src/components/commons/hooks/useCount";

export default function customhooksPage() {
  const { count, onClickCountUp } = useCount();

  return (
    <>
      <div>
        <p>지금의 카운트는 {count} 입니다!</p>
        <button onClick={onClickCountUp}>Count up!</button>
      </div>
    </>
  );
}
