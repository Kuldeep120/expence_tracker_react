import { useRef, useState, type FormEvent } from "react";
import { useForm, type FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  
  console.log(errors);
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  // const handleSubmittV2 = (event: FormEvent, onSubmit)=>{
  //   console.log(event);
  //   return onSubmit
  // }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3, maxLength: 20 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" ? (
          <p>Name field is required</p>
        ) : null}
        {errors.name?.type === "minLength" ? (
          <p>Name field should atleat be 3</p>
        ) : null}
      </div>
      <div className="mb-5">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
