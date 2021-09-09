import React from 'react';
import { useState } from 'react/cjs/react.development';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const[edit,setEdit]= useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setEdit(false);
  };
  const newbtnhandeler = ()=>{
setEdit(true);
  };
const stopEditingHnadeler = ()=>{
  setEdit(false);
};
  return (
    <div className='new-expense'>
      { edit ===false  &&<button onClick={newbtnhandeler}> Add New Items </button>}
      {
        edit === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancel={stopEditingHnadeler}/>  }
   
    </div>
  );
};

export default NewExpense;
