import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filtredEx = props.items.filter(x=>x.date.getFullYear().toString()===filteredYear);
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

       {filtredEx.length === 0 ?<p>no expenses found </p>:filtredEx.map( x =>
    <ExpenseItem
    Key={x.id}
    title={x.title}
    amount={x.amount}
    date={x.date}
  />  )}
    
      </Card>
    </div>
  );
};

export default Expenses;
