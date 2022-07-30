import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import Navbar from "../Page1/Navbar/Navbar";
import "./EditActivity.css";

const EditAct = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
<div>
    <Navbar />
    <div className="bigBox">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="type">
          <h2>Type activity : </h2>
          <select {...register("category", { required: true })}>
            <option value="">Select...</option>
            <option value="A">Running </option>
            <option value="B">Swimming</option>
            <option value="C">Hiking</option>
          </select>
          {errors.category && <p>Type is required</p>}
        </div>

        <div className="type">
          <h2>Duration : </h2>
          <div className="boxDu">
            <input type="number" {...register("hour", { required: true })} />
            {errors.hour && <p>Hour is required</p>}
            <h2>Hours</h2>
            <input type="number" {...register("minute", { required: true })} />
            {errors.minute && <p>Minutes is required</p>}
            <h2>Minutes</h2>
          </div>
        </div>

        <div className="calendar">
          <h2>Date : </h2>
          <Controller
            control={control}
            name="dateInput"
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          {errors.dateInput && <p>Date is required</p>}
        </div>

        <div className="type2">
          <h2>Description </h2>
          <textarea {...register("aboutYou")} placeholder="Description" />
        </div>

        <div className="btn">
        <input type="submit" value="Edit" />
        <input type="submit" value="Cancel" />
        </div>
      </form>
    </div>
    </div>
  );
  
};

export default EditAct;