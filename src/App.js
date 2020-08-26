import React, { useState } from 'react';
import './App.css';

function App() {
  const [activetab, setTab] = useState(0);

  function handleTabChange(index) {
    setTab(index);
  }

  // function getForm() {
  //   if (activetab === 0) {
  //     return (
  //       <form name='login'>
  //         <input type='text' placeholder='Username' />
  //         <input type='password' placeholder='password' />
  //       </form>
  //     );
  //   }
  //   if (activetab === 1) {
  //     return (
  //       <form name='register'>
  //         <input type='text' placeholder='Username' />
  //         <input type='email' placeholder='Email' />
  //         <input type='password' placeholder='password' />
  //       </form>
  //     );
  //   }
  //   return null;
  // }

  return (
    <div>
      <button onClick={(event) => handleTabChange(0)}>Login</button>
      <button onClick={(event) => handleTabChange(1)}>Register</button>
      {activetab === 0 ? (
        <form name='login'>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='password' />
        </form>
      ) : (
        <form name='register'>
          <input type='text' placeholder='Username' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='password' />
        </form>
      )}

      {/* {getForm()} */}
    </div>
  );
}

export default App;
