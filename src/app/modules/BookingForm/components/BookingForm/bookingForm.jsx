import { useEffect, useState } from "react";
import BookingTower from "../BookingTower/bookingTower";
import { Form, Typography, Button, Space } from "antd";
import dayjs from "dayjs";
import BookingFloor from "../BookingFloor/bookingFloor";
import BookingRoom from "../BookingRoom/bookingRoom";
import BookingDate from "../BookingDate/bookingDate";
import BookingTime from "../BookingTime/bookingTime";
import BookingComment from "../BookingComment/bookingComment";
import BookingSubmitButton from "../BookingSubmitButton/bookingSubmitButton";

const BookingForm = () => {
  const [data, setData] = useState({
    tower: "",
    floor: "",
    room: "",
    date: "",
    time: "",
    comment: "",
  });
  const [form] = Form.useForm();

  const towerOptions = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
  ];
  const floorOptions = [
    { label: "3", value: "3" },

    { label: "4", value: "4" },

    { label: "5", value: "5" },

    { label: "6", value: "6" },
    { label: "7", value: "7" },

    { label: "8", value: "8" },

    { label: "9", value: "9" },

    { label: "10", value: "10" },

    { label: "11", value: "11" },

    { label: "12", value: "12" },

    { label: "13", value: "13" },

    { label: "14", value: "14" },

    { label: "15", value: "15" },

    { label: "16", value: "16" },

    { label: "17", value: "17" },

    { label: "18", value: "18" },

    { label: "19", value: "19" },

    { label: "20", value: "20" },

    { label: "21", value: "21" },

    { label: "22", value: "22" },

    { label: "23", value: "23" },

    { label: "24", value: "24" },

    { label: "25", value: "25" },

    { label: "26", value: "26" },

    { label: "27", value: "27" },
  ];
  const roomOptions = [
    { label: "1", value: "1" },

    { label: "2", value: "2" },

    { label: "3", value: "3" },

    { label: "4", value: "4" },

    { label: "5", value: "5" },

    { label: "6", value: "6" },

    { label: "7", value: "7" },

    { label: "8", value: "8" },

    { label: "9", value: "9" },

    { label: "10", value: "10" },
  ];
  const { Title, Text } = Typography;
  const handleSelectChange = (value, name) => {
    setData({ ...data, [name]: value });
    console.log(value);
  };
  const handleFinish = () => {
    console.log(
      JSON.stringify({
        ...data,
        date: data.date ? dayjs(data.date).format("DD/MM/YYYY") : "",
        time: data.time
          ? dayjs(data.time[0]).format("HH:mm") +
            "-" +
            dayjs(data.time[1]).format("HH:mm")
          : "",
      })
    );
  };
  const handleReset = () => {
    setData({
      tower: "",
      floor: "",
      room: "",
      date: "",
      time: "",
      comment: "",
    });
    form.resetFields();
  };

  // const [form] = Form.useForm();
  // const onFinish = (values) => {
  //     console.log('Success:', values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //     console.log('Failed:', errorInfo);
  // };
  return (
    <Form
      form={form}
      onFinish={handleFinish}
      className="flex flex-col shadow w-96 p-4"
      // labelCol={{
      //   span: 10,
      // }}
      // wrapperCol={{
      //   span: 15,
      // }}
      name="form-control"
    >
      <div className="flex justify-center">
        {/* <Text className=" text-2xl mb-4">Форма бронирования</Text> */}
        <h1 className="text-2xl mb-4 font-bold text-">Форма бронирования</h1>
      </div>
      <BookingTower
        onChange={handleSelectChange}
        options={towerOptions}
        name="tower"
        value={data.tower}
        form={form}
      />
      <BookingFloor
        onChange={handleSelectChange}
        options={floorOptions}
        name="floor"
        value={data.floor}
      />
      <BookingRoom
        onChange={handleSelectChange}
        options={roomOptions}
        name="room"
        value={data.room}
      />
      <BookingDate
        onChange={handleSelectChange}
        type="date"
        name="date"
        value={data.date}
      />
      <BookingTime
        onChange={handleSelectChange}
        type="time"
        name="time"
        value={data.time}
      />
      <BookingComment
        onChange={handleSelectChange}
        name="comment"
        value={data.comment}
      />
      <Space>
        <Button
          type="primary"
          htmlType="submit"
          className=" bg-blue-500 "
        >
          Отправить
        </Button>
        <Button htmlType="button" onClick={handleReset}>
          Очистить
        </Button>
      </Space>
      {/* <BookingSubmitButton /> */}
    </Form>
  );
};

export default BookingForm;
