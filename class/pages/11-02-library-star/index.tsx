import { Rate } from "antd";
import { useState } from "react";

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <div>
      <Rate onChange={handleChange} value={value} />
    </div>
  );
}
