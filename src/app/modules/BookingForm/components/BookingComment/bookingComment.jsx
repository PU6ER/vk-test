import React from "react";
import { Form, Input } from "antd";



const BookingComment = ({ onChange, name, value}) => {
  const handleChange = (e) => {
    onChange(e.target.value, name);
  };
  const {TextArea} = Input;
  return (
    <Form.Item label="Комментарий" name={name}>
      <TextArea onChange={handleChange}  value={value}/>
    </Form.Item>
  );
};

export default BookingComment;