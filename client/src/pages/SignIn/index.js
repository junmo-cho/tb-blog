import { useState } from "react";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import './style.scss';

const SignIn = () => {
  const [formChange, setFormChange] = useState(false);
  const [movingClass, setMovingClass] = useState('moving');
  const [movingFormClass, setMovingFormClass] = useState('moving-form-active');

  const onClickChange = () => {
    if(formChange) {
      
    }
    setFormChange()
  }

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className={`moving-form ${movingFormClass}`}>
          { formChange ? <Login /> : <SignUp /> }
        </div>
        <div className={`moving-box ${movingClass}`}>
          <h2 className="moving-box-title">Welcome Back!</h2>
          <p className="moving-box-description">사용하시는 두레이 이메일을 등록해 주세요.</p>
          <button type="button" className="signup-link-btn" onClick={onClickChange}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;