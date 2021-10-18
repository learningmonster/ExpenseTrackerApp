import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [expenseTitle, setExpenseTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  // let expenseTitle = props.title;
  const expenseAmount = props.amount;

  const clickHandler = () => {
    // expenseTitle = "Updated title!!!";
    setExpenseTitle("Updated title!!!");
    console.log(expenseTitle);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
