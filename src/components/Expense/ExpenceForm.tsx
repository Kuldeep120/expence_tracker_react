import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues } from "react-hook-form";

interface Props {
  onHandleSubmit: (data: FieldValues) => void;
}

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(1),
  category: z.string().min(3),
});

  // category: z.literal(["Groceries", "Utilities", "Entertainment"])

type FormData = z.infer<typeof schema>;

const ExpenceForm = ({ onHandleSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  console.log(errors);
  return (
    <div>
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
            {...register("amount",{valueAsNumber: true})}
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
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
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
