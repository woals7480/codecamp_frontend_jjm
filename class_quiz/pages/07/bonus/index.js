const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "바나나" },
  { number: 10, title: "배" },
];

export default function Bonus() {
  const evenFruits = fruits.filter((item) => item.number % 2 === 0);

  console.log(evenFruits);

  return (
    <>
      {evenFruits.map((el) => (
        <div>
          <div>번호 : {el.number}</div>
          <div>이름 : {el.title}</div>
        </div>
      ))}
    </>
  );
}
