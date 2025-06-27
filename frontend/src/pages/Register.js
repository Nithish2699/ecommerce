import React, { useState } from 'react';
import API from '../api';

function Register() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = () => {
    API.post('/auth/register', form).then(() => alert("Registered!"))
    .catch(() => alert("User may already exist"));
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={submit}>Register</button>
    </div>
  );
}

export default Register;
