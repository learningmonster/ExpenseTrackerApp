import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const itemsArray = props.items;

  return (
    <Card className="expenses">
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
    </Card>
  );
};

export default Expenses;
