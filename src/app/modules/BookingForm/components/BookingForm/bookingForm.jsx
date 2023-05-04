import { useEffect } from "react";
import BookingTower from "../BookingTower/bookingTower";
import { Form } from "antd";
import BookingFloor from "../BookingFloor/bookingFloor";

const BookingForm = () => {
    let floorOptions = [];
  useEffect(() => {
    for (let i = 3; i < 28; i++) {
      floorOptions[i] = { value: String(i), label: String(i) };
    }
  }, []);
  const towerOptions = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
  ];
  
  // const [form] = Form.useForm();
  // const onFinish = (values) => {
  //     console.log('Success:', values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //     console.log('Failed:', errorInfo);
  // };
  return (
    <div className="flex flex-col justify-center w-96 shadow p-4 mt-4">
      <Form>
        <BookingTower options={towerOptions} />
        <BookingFloor options={floorOptions} />
      </Form>
    </div>
  );
};

export default BookingForm;
