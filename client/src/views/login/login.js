// src/Login.js
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate ();

  const handleLogin = () => {
    // 在这里添加登录逻辑，例如调用API
    console.log('登录', email, password);
    // 假设登录成功，跳转到注册页面
    history.push('/register');
  };

  return (
    <div className="login-container">
      <h2>登录</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}

export default Login;