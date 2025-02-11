// src/Register.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Alert } from 'antd';
import './register.scss'; // 引入自定义CSS文件
const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // 校验密码长度
    if (password.length < 8) {
      setPasswordError('密码长度必须不少于8位');
      setConfirmPasswordError('');
      return;
    }

    // 校验两次输入密码是否一致
    if (password !== confirmPassword) {
      setPasswordError('');
      setConfirmPasswordError('两次输入的密码不一致');
      return;
    }

    // 清除错误信息
    setPasswordError('');
    setConfirmPasswordError('');

    // 在这里添加注册逻辑，例如调用API
    console.log('注册', username, email, password);

    // 假设注册成功，跳转到登录页面
    navigate('/login');
  };

  return (
    <div className="register-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <h2>注册</h2>
    <Form onFinish={handleRegister} style={{ width: '300px' }}  layout="vertical">
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input style={{ width: '100%', height: '40px' }} value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="邮箱"
        name="email"
        rules={[{ required: true, type: 'email', message: '请输入有效的邮箱地址!' }]}
      >
        <Input style={{ width: '100%', height: '40px' }} value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
        help={passwordError}
      >
        <Input.Password style={{ width: '100%', height: '40px' }} value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="确认密码"
        name="confirmPassword"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: '请确认密码!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(confirmPasswordError));
            },
          }),
        ]}
        help={confirmPasswordError}
      >
        <Input.Password style={{ width: '100%', height: '40px' }} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%', height: '40px' }}>
          注册
        </Button>
      </Form.Item>
    </Form>
  </div>
  );
};

export default Register;