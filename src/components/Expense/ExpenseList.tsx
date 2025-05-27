import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDeleteExpense: (expenseNo: number) => void;
}
const ExpenseList = ({ expenses, onDeleteExpense }: Props) => {
  const [catFilter, setFilter] = useState("");

  if (expenses.length === 0) return null;

  const handleFilterChange = (catFilter: string) => {
    setFilter(catFilter);
  };
  const catFilters = ["Groceries", "Utilities", "Entertainment"];
  const fExpenses = expenses.filter(
    (expenseItem) => !catFilter || expenseItem.category === catFilter
  );
  return (
    <>
      <ExpenseFilter
        catFilters={catFilters}
        onChangeFilter={handleFilterChange}
      />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {fExpenses.map((expenseItem) => (
            <tr key={expenseItem.id}>
              <td>{expenseItem.description}</td>
              <td>{expenseItem.amount}</td>
              <td>{expenseItem.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteExpense(expenseItem.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <td>Total</td>
          <td>{fExpenses.reduce((acc, expense) => expense.amount + acc, 0)}</td>
          <td></td>
          <td></td>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
