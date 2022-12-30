// 백엔드에서 받아온 데이터라고 가정(컴포넌트 위에 만든 이유: 컴포넌트 리렌더링돼도 다시 안 만들어짐)
const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "바나나" },
  { number: 10, title: "유자" },
];

export default function MapFruitsPage() {
  return (
    <>
      {FRUITS.map((item) => (
        <div>
          {item.number} . {item.title}
        </div>
      ))}
    </>
  );
}
