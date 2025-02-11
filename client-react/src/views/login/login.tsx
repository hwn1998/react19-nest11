// src/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form } from 'antd';
import 'antd/dist/reset.css';
import './login.scss'; // 引入自定义的CSS文件

interface LoginProps {}

function Login(props: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // 在这里添加登录逻辑，例如调用API
    console.log('登录', email, password);
    // 假设登录成功，跳转到注册页面
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h2>登录</h2>
      <Form layout="vertical">
        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, message: '请输入您的邮箱!' }]}
        >
          <Input
            type="email"
            placeholder="邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '300px', height: '40px' }} // 设置输入框宽高
          />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '300px', height: '40px' }} // 设置输入框宽高
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleLogin} style={{ width: '300px', height: '40px' }}> 
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;