import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

function Authentication() {
  const [registerFormStatus, setRegisterFormStatus] = useState();

  const loginProps = useSpring({
    left: registerFormStatus ? -480 : 0
  });

  const registerProps = useSpring({
    left: registerFormStatus ? 0 : 480
  });

  const loginBtnProps = useSpring({
    borderBottom: registerFormStatus ? 'solid 0px transparent' : 'solid 2px #fff'
  });

  const registerBtnProps = useSpring({
    borderBottom: registerFormStatus ? 'solid 2px #fff' : 'solid 0px transparent'
  });

  function loginClicked() {
    setRegisterFormStatus(false);
  };

  function registerClicked() {
    setRegisterFormStatus(true);
  }
  return (
    <div className='login-register-wrapper'>
      <div className='nav-buttons'>
        <animated.button onClick={loginClicked} id='loginBtn' style={loginBtnProps}>Login</animated.button>
        <animated.button onClick={registerClicked} id='registerBtn' style={registerBtnProps}>Register</animated.button>
      </div>
      <div className='form-group'>
        <animated.form action='' id='loginForm' style={loginProps}><LoginForm/></animated.form>
        <animated.form action='' id='registrationForm' style={registerProps}><RegistrationForm /></animated.form>
      </div>
      <animated.div className="forgot-panel" style={loginProps}>
        <a href='/#'>Forgot password</a>
      </animated.div>
    </div>
  )
}

function LoginForm() {
  return (
    <React.Fragment>
      <label htmlFor='username'>USERNAME</label>
      <input type='text' id='username' />
      <label htmlFor='password'>PASSWORD</label>
      <input type='password' id='password' />
      <input type='submit' value='submit' className='submit' />
    </React.Fragment>
  )
}

function RegistrationForm() {
  return (
    <React.Fragment>
      <label htmlFor='fullname'>full name</label>
      <input type='text' id='fullname' />
      <label htmlFor='email'>email</label>
      <input type='text' id='email' />
      <label htmlFor='password'>password</label>
      <input type='password' id='password' />
      <label htmlFor='confirmPassword'>confirm password</label>
      <input type='password' id='confirmPassword' />
      <input type='submit' value='submit' className='submit' />
    </React.Fragment>
  )
}

export default Authentication;
