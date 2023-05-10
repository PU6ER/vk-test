import React from "react";
import { Form, Select } from "antd";
const BookingTower = ({options, onChange, name, value, form}) => {
  const handleChange = (value) => {
    onChange(value,name)
    
  }
  return (
    <Form.Item name = {name}label="Башня" rules={[{required: true, message:"Выберете башню"},]}>
        
         
          <Select options={options} onChange={handleChange}  value={value}/>
        
      </Form.Item>
   
  );
};

export default BookingTower;
