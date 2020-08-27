import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [activetab, setTab] = useState(0);
  const [userList, setUserList] = useState([]);

  function handleTabChange(index) {
    setTab(index);
  }

  function handleRegisterSubmit(userData) {
    let newUserList = [...userList];
    newUserList.push(userData);
    setUserList(newUserList);
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
        <LoginForm />
      ) : (
        <RegisterForm melvinBad={handleRegisterSubmit} />
      )}
      <ul>
        {userList.map((user, index) => (
          <li>
            {user.username} {user.email} {user.password}
          </li>
        ))}
      </ul>
      {/* {getForm()} */}
    </div>
  );
}

export default App;
