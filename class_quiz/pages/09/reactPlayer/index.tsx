import ReactPlayer from "react-player";

export default function ReactPlayerPage() {
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=qc1lvDdsxM0&t=2302s&ab_channel=%EB%B8%94%EB%A3%A8%EB%B8%94Bluebl"
        width="800px"
        height="600px"
        volume={0.1}
        playing={true}
      />
    </>
  );
}
