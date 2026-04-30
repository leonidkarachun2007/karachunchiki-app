import './Registration.css';
import { useState } from 'react';

export function Registration() {
    const [errors, setErrors] = useState({ name: false, password: false });

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({ ...prev, [name]: value.length < 6 }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.length >= 7) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Log in</h1>
      <div className="login-card">
        <div className="form-section">
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label for="account-name">SIGN IN WITH ACCOUNT NAME{errors.name && <span className="error-hint">(an error was made)</span>}</label>
              <input
                id="account-name"
                name="name"
                type="name"
                required
                className={errors.name ? 'input-error' : ''}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>PASSWORD {errors.password && <span className="error-hint">(an error was made)</span>}</label>
              <input
                id="password"
                name="password"
                type="password"
                className={errors.password ? 'input-error' : ''}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              />
            </div>

            <div className="button-row">
              <button type="submit" className="btn-signin">SIGN IN</button>
              <button type="button" className="btn-help">Help, i cant log in</button>
            </div>
          </form>

          <div className="footer-links">
            <span>no account?</span>
            <a href="#" className="create-link">Create a new one!</a>
          </div>
        </div>

        <div className="qr-section">
          <span className="qr-title">SIGN IN WITH QRCODE</span>
          <div className="qr-code-wrapper">
            <img src="Qr.png" alt="QR" />
          </div>
          <p className="qr-instruction">
            Use out app or other means to scan this QRcode and log in into your account
          </p>
        </div>
      </div>
    </div>

  );
}

export default Registration;
