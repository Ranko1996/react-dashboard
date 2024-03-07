import React from 'react';
import './addButton.css'; // Uvoz CSS datoteke za stilizaciju

const AddButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="add-document-btn">
      {children}
    </button>
  );
};

export default AddButton;
