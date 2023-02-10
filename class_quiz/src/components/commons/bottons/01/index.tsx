interface Iprops {
  isActive: boolean;
  title: string;
}

export default function Button01(props: Iprops) {
  return (
    <>
      <button style={{ backgroundColor: props.isActive ? "blue" : "green" }}>
        {props.title}
      </button>
    </>
  );
}
