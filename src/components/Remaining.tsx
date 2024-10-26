import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Modal, Button } from "react-bootstrap";

const Remaining = () => {
  const { expenses } = useContext(AppContext);
  // let budget = 1000;
  const { budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  // Exercise: Create an alert when Remaining is less than 0.
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    console.log("budget: ", budget);
    console.log("expenses: ", totalExpenses);

    if (budget - totalExpenses < 0) {
      console.log("show model");
      setModalVisible(true);
    }
  }, [totalExpenses]);

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
      <Modal show={modalVisible} onClose={() => setModalVisible(false)}>
        <p>Your expenses have exceeded your budget!</p>
        <Button onClick={() => setModalVisible(false)}>Ok</Button>
      </Modal>
    </div>
  );
};

export default Remaining;
