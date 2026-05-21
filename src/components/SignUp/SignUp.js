import './SignUp.css';
import { useState } from 'react';

export function SignUp() {
  const [errors, setErrors] = useState({ name: false, password: false });

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({ ...prev, [name]: value.length < 6 }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.length >= 6) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  return (
    <div className="login-container-signup">
      <h1 className="login-title-signup">Create an account</h1>
      <div className="login-card-signup">
        <div className="form-section-signup">
          <form className="auth-form-signup" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group-signup">
              <label for="account-name">SIGN IN WITH ACCOUNT NAME{errors.name && <span className="error-hint-signup">(an error was made)</span>}</label>
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

            <div className="input-group-signup">
              <label>PASSWORD {errors.password && <span className="error-hint-signup">(an error was made)</span>}</label>
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
            <label class="checkbox-signup">
              <input type="checkbox" name="terms" required />
              <span class="checkmark"></span>
              <p>I am 13 years of age or older and agree to the terms of the Steam Subscriber Agreement and the Valve Privacy Policy..</p>
            </label>
            
            <label class="checkbox-signup-captcha captcha-wrapper">
              <input type="checkbox" name="human-verify" required />
              <span class="checkmark-captcha"></span>
              <div class="captcha-content">
                <p>I am human</p>
                <div class="captcha-brand">
                  <img src="captcha.png"/>
                </div>
              </div>
            </label>

            <div className="button-row-signup">
              <button type="submit" className="btn-signup">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default SignUp;
