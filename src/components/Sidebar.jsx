import { useState } from "react";
/**
 * Sidebar component that displays and filters menu items
 */
export default function Sidebar({ initialMenuItems }) {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [newMenuItem, setNewMenuItem] = useState("");
  const [filter, setFilter] = useState("");

  //  Add new menu item to the TOP of the list
  const addMenuItem = () => {
    if (newMenuItem.trim() !== "") {
      setMenuItems((prevItems) => [newMenuItem, ...prevItems]); // Add to the top
      setNewMenuItem(""); // Clear input
    }
  };

  //  Filter menu items case-insensitively
  const filteredItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Menu Items</h2>

      {/*  Display menu items */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/*  Input for new menu item */}
      <input
        type="text"
        value={newMenuItem}
        onChange={(e) => setNewMenuItem(e.target.value)}
        placeholder="Enter new menu item"
      />
      <button onClick={addMenuItem}>Add Item</button>

      {/*  Input for filtering */}
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by..."
      />
    </div>
  );
}

