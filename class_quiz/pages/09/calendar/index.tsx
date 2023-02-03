import { Calendar } from "antd";
import type { Dayjs } from "dayjs";
import { useState } from "react";

export default function CalendarPage() {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const today = `${yyyy}-${mm}-${dd}`;

  const [selectValue, setSelectValue] = useState(today);
  const [isOpen, setisOpen] = useState(false);
  const onSelect = (newValue: Dayjs) => {
    setSelectValue(newValue.format("YYYY-MM-DD"));
  };

  const onClickCalendar = () => {
    setisOpen((prev) => !prev);
  };

  return (
    <>
      <div
        style={{ border: "1px solid gray", width: "300px" }}
        onClick={onClickCalendar}
      >
        {selectValue}
      </div>
      {isOpen && (
        <div style={{ width: "300px" }}>
          <Calendar fullscreen={false} onSelect={onSelect} />
        </div>
      )}
    </>
  );
}
