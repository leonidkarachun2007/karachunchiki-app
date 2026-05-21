import './AccountConf.css';

export function AccountConf() {
  return (
    <div className="confirm-container">
      <div className= "card-confirm">
        <div className="text-container">
          <p className="create-account" >Account created!</p>
          <p className="message">An email has been sent to you.</p>
        </div>
          <button type="submit" className="btn-accept">SIGN UP</button>
        
      </div>
    </div>
  )
};

export default AccountConf;
