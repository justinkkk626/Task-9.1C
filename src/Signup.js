import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // 模拟保存用户数据到本地存储
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    console.log("User signed up successfully:", user);

    // 注册成功后，跳转到登录页面
    history.push('/login');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input 
            type="text" 
            id="name" 
            className="form-control" 
            placeholder="Your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            placeholder="Your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <input 
            type="password" 
            id="password" 
            className="form-control" 
            placeholder="Your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm password*</label>
          <input 
            type="password" 
            id="confirm-password" 
            className="form-control" 
            placeholder="Confirm your password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Create</button>
      </form>
    </div>
  );
}

export default Signup;
