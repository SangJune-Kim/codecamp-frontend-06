import { DatePicker, Space } from "antd";
import { useState } from "react";
// import moment from 'moment';

// const dateFormat = "YYYY/MM/DD";

const LibraryCalendarPage = () => {
  const [dateString, setDateString] = useState("");
  const [month, setMonth] = useState("");

  const onChangePicker = (date: any, dateString: any) => {
    console.log(date, dateString);
    setDateString(dateString);
    setMonth(`${date._d.getMonth() + 1}월`);
  };

  return (
    // <div>
    //   <Space direction="vertical" size={12}>
    //     <DatePicker
    //       defaultValue={moment("2022/03/28", dateFormat)}
    //       format={dateFormat}
    //     />
    //   </Space>
    //   <div>{}</div>
    // </div>
    <div>
      <Space>
        <DatePicker onChange={onChangePicker} />
      </Space>
      <div>
        {dateString}
        <br />
        {month}
      </div>
    </div>
  );
};
export default LibraryCalendarPage;
