import React from "react";
import { Form, Select } from "antd";

const BookingFloor = ({options}) => {
  return (
    <Form.Item label="Этаж">
      {/* <Select.Option value="">Demo</Select.Option> */}
      <Select options={options} />
    </Form.Item>
  );
};

export default BookingFloor;
