import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = () => {
    API.post('/auth/login', form).then(res => {
      localStorage.setItem('token', res.data.token);
      navigate('/');
    }).catch(() => alert("Invalid credentials"));
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={submit}>Login</button>
    </div>
  );
}

export default Login;
