import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems); // Use initialItems to set the initial state

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>🌴 Far Away 👜</h1>
    </div>
  );
}

function Form({ onAddItems }) {
  // Destructure the onAddItems function from props
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const optionsArray = Array.from({ length: 20 }, (_, index) => index + 1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) {
      alert("Add a description first!");
      return; // Stop the function if there's no description
    }

    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {optionsArray.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  // Use items from props
  return (
    <div className="list">
      <ul>
        {items.map(
          (
            item // Use items from props to map
          ) => (
            <Item item={item} key={item.id} />
          )
        )}
      </ul>
    </div>
  );
}

function Item({ item }) {
  // This component is fine as it is
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats({ items }) {
  // Calculate stats using items from props
  const packedItemsCount = items.filter((item) => item.packed).length;
  const totalItemsCount = items.length;
  const packedPercentage = totalItemsCount
    ? ((packedItemsCount / totalItemsCount) * 100).toFixed(0)
    : 0;

  return (
    <footer className="stats">
      <em>
        👜 You have {totalItemsCount} items on your list, and you already packed{" "}
        {packedItemsCount} ({packedPercentage}%)
      </em>
    </footer>
  );
}

export default App;
