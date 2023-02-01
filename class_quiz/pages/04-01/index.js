import axios from "axios";

export default function Restapi() {
  const restapi = async () => {
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result.data);
  };
  restapi();

  return <></>;
}
