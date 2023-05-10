import React from "react";
import { Form, Select } from "antd";

const BookingRoom = ({onChange, name, options, value}) => {
  const handleChange = (value) => {
    onChange(value, name);
  };
  return (
    <Form.Item label="Номер переговорки" name={name} rules={[{ required: true, message: "Выберите переговорку" }]}>
      <Select onChange={handleChange} options={options} value={value} />
    </Form.Item>
  );
};

export default BookingRoom;
