// src/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">登录</Link>
        </li>
        <li>
          <Link to="/register">注册</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;