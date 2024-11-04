import React, { useState } from 'react';

function LoginLogoutApp() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{isLoggedIn ? 'Welcome, User!' : 'Please Log In'}</h1>
      
      {isLoggedIn ? (
        <button onClick={handleLoginLogout}>Logout</button>
      ) : (
        <button onClick={handleLoginLogout}>Login</button>
      )}

      {isLoggedIn && (
        <div style={{ marginTop: '20px' }}>
          <h3>You are now logged in.</h3>
          <p>This content is visible only when logged in.</p>
        </div>
      )}
    </div>
  );
}

export default LoginLogoutApp;
