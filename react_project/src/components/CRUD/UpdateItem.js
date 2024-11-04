import React, { useState } from 'react';

function UpdateItem({ currentItem, onSave, onCancel }) {
  const [updatedItem, setUpdatedItem] = useState(currentItem.item);

  const handleSave = () => {
    if (updatedItem.trim() === '') {
      alert('Please enter a valid item');
      return;
    }
    onSave(updatedItem); 
  };

  return (
    <div>
      <h2>Update Item</h2>
      <input
        type="text"
        value={updatedItem}
        onChange={(e) => setUpdatedItem(e.target.value)}
        placeholder="Update the item"
      />
      <button onClick={handleSave}>Save Item</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default UpdateItem;
