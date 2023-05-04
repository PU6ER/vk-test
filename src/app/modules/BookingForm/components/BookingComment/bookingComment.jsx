import React from "react";
import { Form, Input } from "antd";



const BookingComment = ({ onChange, name, }) => {
  const handleChange = (e) => {
    onChange(e.target.value, name);
  };
  const {TextArea} = Input;
  return (
    <Form.Item label="Комментарий">
      <TextArea onChange={handleChange}  />
    </Form.Item>
  );
};

export default BookingComment;