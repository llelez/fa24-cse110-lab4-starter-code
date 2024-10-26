import React, { useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Expense} from "../../types/types";
import {v4 as uuidv4 } from "uuid";


export const AddExpenseForm = () => {

  // Exercise: Consume the AppContext here
  
    const { expenses, setExpenses } = useContext(AppContext);

    const initialExpense = 
      {   id: uuidv4(),
          name: "",
          cost: 0,
      };
    

    const [createExpense, setCreateExpense] = useState(initialExpense);



  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newExpense = {
      ...createExpense,
    };

    setExpenses((expenses) => [...expenses, newExpense]);

    setCreateExpense(initialExpense);
    
    // Exercise: Add add new expense to expenses context array
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={createExpense.name}
            onChange={(event) =>
              setCreateExpense({...createExpense, name:event.target.value})
            }
            // HINT: onChange={}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="number"
            className="form-control"
            id="cost"
            value={createExpense.cost}
            onChange={(event) =>
              setCreateExpense({...createExpense, cost:parseFloat(event.target.value)})
            }
            // HINT: onChange={}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;