import axios from "axios";
import { useEffect, useState } from "react";
import OpenapiListUI from "./OpenapiList.presenter";

export default function OpenapiList() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const getImg = () => {
      new Array(9).fill(0).forEach(async (_) => {
        const result = await axios.get("https://random.dog/woof.json");
        setImgUrls((prev) => [...prev, result.data.url]);
      });
    };
    getImg();
  }, []);

  return <OpenapiListUI imgUrls={imgUrls} />;
}
