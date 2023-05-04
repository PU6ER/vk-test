import React from "react";
import { Form, Button} from "antd";



const BookingComment = ({ onChange, name, }) => {
  const handleChange = (e) => {
    onChange(e.target.value, name);
  };
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit">Отправить</Button>
    </Form.Item>
  );
};

export default BookingComment;