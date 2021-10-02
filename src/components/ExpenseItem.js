import "./ExpenseItem.css";

function ExpenseItem() {
  // return <h2>Expense item!</h2>
  //   return (
  //     <div>
  //       <div>Date</div>
  //       <div>
  //         <h2>Title</h2>
  //         <div>Amount</div>
  //       </div>
  //     </div>
  //   );
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
