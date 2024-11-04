import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [childData, setChildData] = useState('');

  const handleDataFromChild = (data) => {
    setChildData(data); 
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {childData}</p>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default ParentComponent;
