import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues } from "react-hook-form";
import { categories } from "../../App";

interface Props {
  addExpensetoList: (data: FieldValues) => void;
}

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(.01).max(100_000),
  // category: z.string().min(3),
  category: z.enum(categories)
//   cateogyrFixed: z.string().literal(["red", "green", "blue"]),
});

// category: z.literal(["Groceries", "Utilities", "Entertainment"])

export type FormData = z.infer<typeof schema>;

const ExpenceForm = ({ addExpensetoList }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onHandleSubmit = (data: FieldValues) => {
    addExpensetoList(data)
    reset()
  }
  console.log(errors);
  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="mb-5">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="amount" className="form-label">
            amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
            aria-label="Default select example"
          >
            <option selected></option>
            {categories.map((category) =>  <option value={category}>{category}</option>)}
          </select>
          {errors.category && (
            <p className="text text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenceForm;
// export default FormData;
