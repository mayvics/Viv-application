import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../Page1/Navbar/Navbar";
import "./EditAct.css"

const EditAct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
<div>
    <Navbar />
    <div className="bigBox2">
      <form id="form2" onSubmit={handleSubmit(onSubmit)}>
        <div className="type2">
          <h2>Type activity : </h2>
          <select {...register("category", { required: true })}>
            <option value="">---- Select your activity ----</option>
            <option value="A">Running  🏃</option>
            <option value="B">Swimming  🏊🏻‍♂️</option>
            <option value="C">Hiking  🌲👨🏻‍🦯</option>
            <option value="D">Riding bicycle  🚴🏻‍♂️</option>
            <option value="E">Walking  🚶</option>
          </select>
          {errors.category && <p>Type is required</p>}
        </div>

        <div className="type2">
          <h2>Duration : </h2>
          <div className="boxDu2">
            <input type="number" {...register("hour", { required: true })} />
            {errors.hour && <p>Hour is required</p>}
            <h2>Hours</h2>
            <input type="number" {...register("minute", { required: true })} />
            {errors.minute && <p>Minutes is required</p>}
            <h2>Minutes</h2>
          </div>
        </div>

        <div className="calendar2">
          <h2>Date : </h2>
          <input type="date" {...register("date", { required: true})} />
            {errors.date && <p>Date is required</p>}
        </div>

        <div className="type3">
          <h2>Description </h2>
          <textarea {...register("aboutYou")} placeholder="Description" />
        </div>

        <div className="btn2">
        <input type="submit" value="Edit" />
        <input type="submit" value="Cancel" />
        </div>
      </form>
    </div>
    </div>
  );
  
};

export default EditAct;