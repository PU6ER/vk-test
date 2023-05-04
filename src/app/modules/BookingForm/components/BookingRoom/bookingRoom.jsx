import React from "react";
import { Form, Select } from "antd";

const BookingRoom = ({onChange, name, options}) => {
  const handleChange = (value) => {
    onChange(value, name);
  };
  return (
    <Form.Item label="Номер переговорки">
      <Select onChange={handleChange} options={options} />
    </Form.Item>
  );
};

export default BookingRoom;
