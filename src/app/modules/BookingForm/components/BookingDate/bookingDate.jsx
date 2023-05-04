import React from "react";
import { Form, DatePicker } from "antd";
import dayjs from "dayjs";

const BookingDate = ({ onChange, name, type }) => {
  const handleChange = (value) => {
    onChange(dayjs(value).format("DD/MM/YYYY"), name);
  };
  return (
    <Form.Item label="Дата">
      <DatePicker onChange={handleChange} type={type}  />
    </Form.Item>
  );
};

export default BookingDate;
