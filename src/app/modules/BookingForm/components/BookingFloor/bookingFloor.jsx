import React from "react";
import { Form, Select } from "antd";

const BookingFloor = ({ onChange,name, options }) => {
  const handleChange = (value) => {
    onChange(value,name)
  }
  return (
    <Form.Item label="Этаж">
      {/* <Select.Option value="">Demo</Select.Option> */}
      <Select
      
      onChange={handleChange}
        options={options}
      />
    </Form.Item>
  );
};

export default BookingFloor;
