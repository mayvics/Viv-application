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
          <select {...register("ActType", { required: true })}>
            <option value="">---- Select your activity ----</option>
            <option value="Running 🏃">Running  🏃</option>
            <option value="Swimming 🏊🏻‍♂️">Swimming  🏊🏻‍♂️</option>
            <option value="Hiking 🌲👨🏻‍🦯">Hiking  🌲👨🏻‍🦯</option>
            <option value="Riding bicycle 🚴🏻‍♂️">Riding bicycle  🚴🏻‍♂️</option>
            <option value="Walking 🚶">Walking  🚶</option>
          </select>
          {errors.ActType && <p>Type is required</p>}
        </div>

        <div className="type2">
          <h2>Duration : </h2>
          <div className="boxDu2">
            <input type="number" min="0" max="24"{...register("hour", { required: true })} />
            {errors.hour && <p>Hour is required</p>}
            <h3>Hours</h3>
            <input type="number" min="0" max="59"{...register("minute", { required: true })} />
            {errors.minute && <p>Minutes is required</p>}
            <h3>Minutes</h3>
          </div>
        </div>

        <div className="calendar2">
          <h2>Date : </h2>
          <input type="date" {...register("date", { required: true})} />
            {errors.date && <p>Date is required</p>}
        </div>

        <div className="type3">
          <h2>Description</h2>
          <textarea {...register("Description")}  />
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