import React from "react";
import { Form, Select } from "antd";
const BookingTower = ({options, onChange, name}) => {
  const handleChange = (value) => {
    onChange(value,name)
  }
  return (
    <Form.Item label="Башня">
        
          {/* <Select.Option value="">Demo</Select.Option> */}
          <Select options={options} onChange={handleChange} />
        
      </Form.Item>
   
  );
};

export default BookingTower;
