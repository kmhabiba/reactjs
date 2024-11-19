import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [childData, setChildData] = useState('');

  const handleDataFromChild = (data) => {
    setChildData(data); 
  };

  return (
    <div>
      <h1 className="navbar-align">Fetching data from Child</h1>
      <p className='content-below-heading'>data is comming from the child</p>
      <p>Data from Child: {childData}</p>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default ParentComponent;
