import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const itemsArray = props.items;

  return (
    <div className="expenses">
      <ExpenseItem
        title={itemsArray[0].title}
        amount={itemsArray[0].amount}
        date={itemsArray[0].date}
      />
      <ExpenseItem
        title={itemsArray[1].title}
        amount={itemsArray[1].amount}
        date={itemsArray[1].date}
      />
      <ExpenseItem
        title={itemsArray[2].title}
        amount={itemsArray[2].amount}
        date={itemsArray[2].date}
      />
      <ExpenseItem
        title={itemsArray[3].title}
        amount={itemsArray[3].amount}
        date={itemsArray[3].date}
      />
    </div>
  );
}

export default Expenses;
