// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  const sendData = () => {
    const data = "Hello from Child!";

    props.sendDataToParent(data); 
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
