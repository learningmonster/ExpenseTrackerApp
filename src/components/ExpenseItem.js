import "./ExpenseItem.css";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;

  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const year = expenseDate.toLocaleString("en-US", { year: "2-digit" });
  //   const day = expenseDate.toLocaleString("en-US", { month: "numeric" });
  const day = expenseDate.getFullYear();

  return (
    <div className="expense-item">
      {/* <div>{expenseDate.toISOString()}</div> */}
      {/* <div>{expenseDate.toDateString()}</div> */}
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
