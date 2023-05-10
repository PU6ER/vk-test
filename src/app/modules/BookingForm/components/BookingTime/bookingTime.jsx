import React from "react";
import { Form, TimePicker, ConfigProvider } from "antd";


const BookingDate = ({ onChange, name, value }) => {
  const handleChange = (value) => {
    onChange(
      value,
      name
    );
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorBgContainer: "#1677ff",
          },
        },
      }}
    >
      <Form.Item
        label="Время"
        name={name}
        rules={[{ required: true, message: "Выберите интервал времени" }]}
      >
        <TimePicker.RangePicker
          onChange={handleChange}
          format="HH:mm"
          value={value}
          popupClassName="bg-no-transparent"
        />
      </Form.Item>
    </ConfigProvider>
  );
};

export default BookingDate;
