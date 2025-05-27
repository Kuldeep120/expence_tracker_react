import { useState } from "react";
import "./App.css";
import ExpenceForm from "./components/Expense/ExpenceForm";
import { type FieldValues } from "react-hook-form";
import ExpenseList from "./components/Expense/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Gas", amount: 100, category: "Utilities" },
    { id: 1, description: "Gas", amount: 200, category: "Utilities" },
  ]);
  const addExpensetoList = (data: FieldValues) => {
    console.log(data);
    const expenseItem = {
      id: expenses.length +1 ,
      description: String(data.description),
      amount: parseInt(data.amount),
      category: String(data.category),
    };
    setExpenses([...expenses, expenseItem]);
  };
  const deleteExpenseFromList = (id: number) => {
    const newExpenseList = expenses.filter(
      (expense) => id !== expense.id
    );
    setExpenses(newExpenseList);
  };
  return (
    <>
      <div>
        <ExpenceForm addExpensetoList={addExpensetoList} />
        <ExpenseList
          onDeleteExpense={deleteExpenseFromList}
          expenses={expenses}
        />
      </div>
    </>
  );
}

export default App;
