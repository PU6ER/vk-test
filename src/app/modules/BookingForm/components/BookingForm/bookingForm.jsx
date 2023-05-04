import { useEffect, useState } from "react";
import BookingTower from "../BookingTower/bookingTower";
import { Form } from "antd";
import BookingFloor from "../BookingFloor/bookingFloor";

const BookingForm = () => {
  const [data, setData] = useState({ tower: "", floor: "" });

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
  const handleSelectChange = (value, name) => {
    setData({ ...data, [name]: value });
    console.log(value);
  };

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
        <BookingTower
          onChange={handleSelectChange}
          options={towerOptions}
          name="tower"
        />
        <BookingFloor
          onChange={handleSelectChange}
          options={floorOptions}
          name="floor"
          
        />
      </Form>
    </div>
  );
};

export default BookingForm;
