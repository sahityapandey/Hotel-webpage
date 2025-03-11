import React from 'react';
import '../styles/App.css';

function Registration() {
  return (
    <form>
    <section className='Registration'>
      <div className="wrapper">
        <span className="icon-close"><ion-icon name="close"></ion-icon></span>

        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon"><ion-icon name="mail"></ion-icon></span>
              <input type="email" />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
              <input type="password" />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <input type="checkbox" />
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="login-register">
              <p>Don't have an account? <a href="#" className="register-link">Register</a></p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon"><ion-icon name="person"></ion-icon></span>
              <input type="text" />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon"><ion-icon name="mail"></ion-icon></span>
              <input type="email" />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
              <input type="password" />
              <label>Password</label>
            </div>
            <button type="submit" className="btn">Register</button>
            <div className="login-register">
              <p>Already have an account? <a href="#" className="login-link">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
    </form>
  );
}

export default Registration;
