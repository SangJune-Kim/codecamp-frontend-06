import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const DogFetch = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");

      setDogUrl(result.data.message);
    };
    DogFetch();
  }, []);

  return (
    <div>
      <img src={dogUrl} />
    </div>
  );
}
