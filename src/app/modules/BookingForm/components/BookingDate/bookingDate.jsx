import React from "react";
import { Form, DatePicker } from "antd";
import dayjs from "dayjs";

const BookingDate = ({ onChange, name, type, value }) => {
  const handleChange = (value) => {
    // onChange(dayjs(value).format("DD/MM/YYYY"), name);
    onChange(value, name);
  };
  return (
    <Form.Item
      label="Дата"
      name={name}
      rules={[{ required: true, message: "Выберите дату" }]}
    >
      <DatePicker onChange={handleChange} type={type} value={value} />
    </Form.Item>
  );
};

export default BookingDate;
