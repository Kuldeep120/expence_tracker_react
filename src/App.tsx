import { useState } from 'react'
import './App.css'
import ExpenceForm from './components/Expense/ExpenceForm'
import { type FieldValues } from "react-hook-form";


function App() {
  const [expenseList, setExpenseList] = useState([{"description":"","amount":0,"category":""}]) 
  const handleSubmit = (data: FieldValues) => {
    console.log(data)
    setExpenseList([...expenseList, {data}])
  }
  return (
    <>
      <div>
        <ExpenceForm onHandleSubmit={handleSubmit}/>
      </div>
    </>
  )
}

export default App
