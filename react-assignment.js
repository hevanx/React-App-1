import React, { useState } from 'react';

const Sidebar = ({ initialMenuItems }) => {
  // TODO: Maintain Menu State
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [filterText, setFilterText] = useState('');

  // TODO: Implement AddMenuItem Callback
  const addMenuItem = () => {
    const inputElement = document.getElementById('menu-input');
    if (inputElement && inputElement.value.trim() !== '') {
      setMenuItems([...menuItems, inputElement.value.trim()]);
      inputElement.value = '';
    }
  };

  // TODO: Filter Menu Items
  const filteredMenuItems = menuItems.filter(item => 
    item.toLowerCase().match(new RegExp(filterText.toLowerCase()))
  );

  return (
    <div className="sidebar">
      {/* Filter Input */}
      <input 
        type="text" 
        placeholder="Filter menu..." 
        onChange={(e) => setFilterText(e.target.value)} 
      />
      
      {/* TODO: Render Menu Items */}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      {/* Input and Button to Add New Menu Items */}
      <input type="text" id="menu-input" placeholder="Add new item" />
      <button onClick={addMenuItem}>Add</button>
    </div>
  );
};

export default Sidebar;