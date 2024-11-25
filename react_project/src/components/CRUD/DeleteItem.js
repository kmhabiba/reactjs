import React from 'react';

function DeleteItem({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <button className="btn-delete" onClick={handleDelete}>Delete</button>
  );
}

export default DeleteItem;
