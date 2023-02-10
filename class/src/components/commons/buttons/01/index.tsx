interface IProps {
  isActive: boolean;
  title: string;
}

export default function Button01(props: IProps) {
  return (
    <>
      <button style={{ backgroundColor: props.isActive ? "yellow" : "blue" }}>
        {props.title}
      </button>
    </>
  );
}
