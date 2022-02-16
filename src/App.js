import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Fruits',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Gas Refil', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Bike Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Electricity',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
   const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
 
  const addExpenseHandler = expense => {
   setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
   });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

// [
//   { id: 'e1', title: "Book", amount: 32.43, date: new Date(2022, 2, 14) },
//   { id: 'e2', title: "Gas Refill", amount: 732.93, date: new Date(2022, 2, 14) },
//   { id: 'e3', title: "Fruits", amount: 23.23, date: new Date(2022, 2, 14) },
//   { id: 'e4', title: "Electricity", amount: 302.44, date: new Date(2022, 2, 14) },
// ]