import React, { useState } from 'react';

const LoginForm = (props) => {
  return (
    <form name='login'>
      <input type='text' placeholder='Username' />
      <input type='password' placeholder='password' />
    </form>
  );
};

export default LoginForm;
