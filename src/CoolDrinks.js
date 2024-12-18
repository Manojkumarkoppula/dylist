import React, { useState } from "react";
import './CoolDrinks.css';

function CoolDrinks() {
  const [fruits, setFruits] = useState([{ name: "banana", count: 1 }]);
  const [deletedItems, setDeletedItems] = useState([]);
  const [inputValue, setInputValue] = useState(""); // Added state for input field

  const addItem = () => {
    if (inputValue.trim()) {
      setFruits([...fruits, { name: inputValue, count: 1 }]);
      setInputValue(""); // Clear the input field using state
    }
  };

  const incrementCount = (index) => {
    const updatedFruits = [...fruits];
    updatedFruits[index].count += 1;
    setFruits(updatedFruits);
  };

  const decrementCount = (index) => {
    const updatedFruits = [...fruits];
    if (updatedFruits[index].count > 1) {
      updatedFruits[index].count -= 1;
      setFruits(updatedFruits);
    }
  };

  const deleteItem = (index) => {
    const deletedFruit = fruits[index];
    setDeletedItems([...deletedItems, deletedFruit]);
    setFruits(fruits.filter((_, i) => i !== index));
  };

  const totalSelectedCount = fruits.reduce((total, fruit) => total + fruit.count, 0);

  return (
    <>
      <input
        type="text"
        value={inputValue} // Bind the input value to state
        onChange={(e) => setInputValue(e.target.value)} // Update state on input change
        placeholder="Enter groceries ..."
      />
      <button onClick={addItem}>Add</button>
      <h3>Fruits List:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            <span>{fruit.name} </span>
            <button onClick={() => decrementCount(index)}>-</button>
            <span> {fruit.count} </span>
            <button onClick={() => incrementCount(index)}>+</button>
            <button onClick={() => deleteItem(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h4>Total Selected Count: {totalSelectedCount}</h4>
      {deletedItems.length > 0 && (
        <>
          <h3>Deleted Items:</h3>
          <ul>
            {deletedItems.map((item, index) => (
              <li key={index}>
                {item.name} (Count: {item.count})
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default CoolDrinks;
