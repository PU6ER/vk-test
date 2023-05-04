import React from "react";
import { Form, TimePicker } from "antd";
import dayjs from "dayjs";

const BookingDate = ({ onChange, name }) => {
  const handleChange = (value) => {
    onChange(
      dayjs(value[0]).format("HH:mm") + "-" + dayjs(value[1]).format("HH:mm"),
      name
    );
  };
  return (
    <Form.Item label="Время">
      <TimePicker.RangePicker onChange={handleChange} format="HH:mm" />
    </Form.Item>
  );
};

export default BookingDate;
