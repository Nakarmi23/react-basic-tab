import React, { useState } from 'react';

const RegisterForm = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.melvinBad({ username, password, email });
  };

  return (
    <form name='register' onSubmit={handleFormSubmit}>
      <input
        value={username}
        type='text'
        placeholder='Username'
        onChange={handleUsernameChange}
      />
      <input
        value={email}
        type='email'
        placeholder='Email'
        onChange={handleEmailChange}
      />
      <input
        value={password}
        type='password'
        placeholder='password'
        onChange={handlePasswordChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default RegisterForm;
