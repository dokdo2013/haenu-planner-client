import React from 'react';
import axios from 'axios';

const Login = () => {
  // Login Process
  let userId = 'test';
  let userPassword = 'test2';
  axios.post("https://study-api.haenu.com/")

  return (
    <div>
      <h1>Login Test</h1>
      <input type="text" name="userId" placeholder="아이디" /><br />
      <input type="password" name="userPassword" placeholder="비밀번호" /><br />
      <button id="loginBtn">Login</button>
    </div>
  )
}

export default Login;