import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const DogFetch = async () => {
      const result = await axios.get(
        "https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/KR.json"
      );
      console.log(result);
      setDogUrl(result.data);
    };
    DogFetch();
  }, []);

  return (
    <div>
      <div>{dogUrl}</div>
    </div>
  );
}
