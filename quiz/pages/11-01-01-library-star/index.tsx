import { Rate } from "antd";
import { useState } from "react";

const LibraryStarPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (value: Number) => {
    setValue(Number(value));
    alert(`${Number(value)}점`);
  };

  const desc = ["1점", "2점", "3점", "4점", "5점"];

  return (
    <div>
      <Rate onChange={handleChange} value={value} />
      <div>{value ? desc[value - 1] : "0점"}</div>
    </div>
  );
};

export default LibraryStarPage;
