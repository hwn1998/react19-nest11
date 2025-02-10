// src/Register.js
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useNavigate ();

  const handleRegister = () => {
    // 校验密码长度
    if (password.length < 8) {
      alert('密码长度必须不少于8位');
      return;
    }
    // 校验两次输入密码是否一致
    if (password !== confirmPassword) {
      alert('两次输入的密码不一致');
      return;
    }
    // 在这里添加注册逻辑，例如调用API
    console.log('注册', username, email, password);
    // 假设注册成功，跳转到登录页面
    history.push('/login');
  };

  return (
    <div className="register-container">
      <h2>注册</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>注册</button>
    </div>
  );
}

export default Register;