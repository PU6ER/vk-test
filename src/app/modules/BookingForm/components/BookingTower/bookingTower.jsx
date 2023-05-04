import React from "react";
import { Form, Select } from "antd";
const BookingTower = ({options}) => {
  return (
    <Form.Item label="Башня">
        
          {/* <Select.Option value="">Demo</Select.Option> */}
          <Select options={options} />
        
      </Form.Item>
   
  );
};

export default BookingTower;
