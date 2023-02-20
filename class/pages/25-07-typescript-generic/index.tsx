// 1. 문자/숫자/타입(primitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result = getPrimitive("철수", 123, true);

// 2. any 타입 => 그냥 자바스크립트랑 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 1000); // any는 아무거나 다 됨
  return [arg3, arg2, arg1];
};
const result = getAny("철수", 123, true);

// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 1000); // unknown은 사용할 때, 타입을 가정하여 사용해야 함
  return [arg3, arg2, arg1];
};
const result = getUnknown("철수", 123, true);

// 4. generic 타입 - 1
function getGeneric<Mytype1, Mytype2, Mytype3>(arg1: Mytype1, arg2: Mytype2, arg3: Mytype1): [Mytype3, Mytype2, Mytype1] {
  console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
}
const result = getGeneric("철수", 123, true);

// 4. generic 타입 - 2
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
}
const result = getGeneric2("철수", 123, true);

// 4. generic 타입 - 3
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
}
const result = getGeneric3("철수", 123, true);

// 4. generic 타입 - 4
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
};
const result = getGeneric4("철수", 123, true);
