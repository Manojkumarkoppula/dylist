import React, { useState } from "react";

function Fruits({ addDeletedItem, addToTotalCount }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [items, setItems] = useState([]);

  const options = ["Apple", "Banana", "Mango", "Grapes"];

  const addItem = () => {
    if (selectedValue) {
      setItems([...items, { name: selectedValue, count: 1 }]);
      setSelectedValue("");
      addToTotalCount(1);
    }
  };

  const incrementCount = (index) => {
    const newItems = [...items];
    newItems[index].count += 1;
    setItems(newItems);
    addToTotalCount(1);
  };

  const decrementCount = (index) => {
    const newItems = [...items];
    if (newItems[index].count > 1) {
      newItems[index].count -= 1;
      setItems(newItems);
      addToTotalCount(-1);
    }
  };
  const deleteItem = (index) => {
    const deletedItem = items[index];
    addDeletedItem(deletedItem.name);
    addToTotalCount(-deletedItem.count);
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Fruits</h3>
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="" disabled>Select a fruit</option>
        {options.map((fruit, index) => (
          <option key={index} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
      <button onClick={addItem}>Add</button>

      <div>
        {items.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <span>{item.name}</span>
            <button onClick={() => decrementCount(index)}>-</button>
            <span>{item.count}</span>
            <button onClick={() => incrementCount(index)}>+</button>
            <button onClick={() => deleteItem(index)} style={{ color: "red" }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fruits;

