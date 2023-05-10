import React from "react";
import { Form, Select } from "antd";

const BookingFloor = ({ onChange, name, options, value }) => {
  const handleChange = (value) => {
    onChange(value, name);
  };
  return (
    <Form.Item
      label="Этаж"
      name={name}
      rules={[{ required: true, message: "Выберите этаж" }]}
    >
      {/* <Select.Option value="">Demo</Select.Option> */}
      <Select onChange={handleChange} options={options} value={value} />
    </Form.Item>
  );
};

export default BookingFloor;
