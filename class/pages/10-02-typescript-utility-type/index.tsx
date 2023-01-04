export default function TypescriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 1. Pick타입
  type aaa = Pick<IProfile, "name" | "age">;

  // 2. Omit 타입
  type bbb = Omit<IProfile, "school">;

  // 3. Partial타입
  type ccc = Partial<IProfile>;

  // 4. Required타입
  type ddd = Required<IProfile>;

  // 5. Record타입
  type eee = "철수" | "영희" | "훈이"; // Union타입
  let child: eee;
  child = "훈이";

  type fff = Record<eee, IProfile>; // Record 타입

  // ===== (tpye vs interface) 차이 : 선언병합 =====
  interface IProfile {
    candy: number;
  }

  let profile: Partial<IProfile> = {};
  profile.candy = 10;
}
