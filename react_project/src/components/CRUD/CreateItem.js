import React, { useState, useEffect } from 'react';
import UpdateItem from './UpdateItem'; 
import DeleteItem from './DeleteItem';
function CreateItem() {
  const [items, setItems] = useState([]); 
  const [newItem, setNewItem] = useState(''); 
  const [isEditing, setIsEditing] = useState(false); 
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('items', JSON.stringify(items));
    } else {
      localStorage.removeItem('items');
    }
  }, [items]);

  const handleAddItem = () => {
    if (newItem.trim() === '') {
      alert('Please enter a valid item');
      return;
    }

    setItems((prevItems) => [...prevItems, newItem]);
    setNewItem('');
  };

  const handleEditItem = (item, index) => {
    setIsEditing(true);
    setCurrentItem({ item, index });
  };

  const handleSaveItem = (updatedItem) => {
    const updatedItems = [...items];
    updatedItems[currentItem.index] = updatedItem;
    setItems(updatedItems);
    setIsEditing(false);
    setCurrentItem(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentItem(null);
  };

  const handleDeleteItem = (itemToDelete) => {
    const updatedItems = items.filter((item) => item !== itemToDelete); // Filter out the deleted item
    setItems(updatedItems);
  };

  return (
    <div>
      <h1 className = "navbar-align"> CRUD Operation</h1>
      <p className = "content-below-heading">This is the content of crud</p>
      <h2>Create New Item</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter a new item"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <h3>Items List</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}{' '}
              <button className="btn-edit" onClick={() => handleEditItem(item, index)}>Edit</button>
              <DeleteItem item={item} onDelete={handleDeleteItem} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}
      
      {isEditing && (
        <UpdateItem
          currentItem={currentItem}
          onSave={handleSaveItem}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
}

export default CreateItem;
    