import { useState } from 'react';
import toast from 'react-hot-toast'
import './CSS/LoginSignUp.css';

const LoginSignup = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    TnCAgreed: false
  });
  const [loading, setLoading] = useState(false);

  const handlelogin  = async () => {
    const {name, email, password, TnCAgreed} = userData
    if(name.trim() ===  '') {
      toast.error("Name is required.")
      return
    }
    if(email.trim() ===  '') {
      toast.error("Email is required.")
      return
    }
    if(password.trim() ===  '') {
      toast.error("Password is required.")
      return
    }
    // console.log(process.env.REACT_APP_API_URL);

    setLoading(true);
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/users/signup`;
      const token = localStorage.getItem('token');
      console.log(url)
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          password
        }),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        }
      })
      if(!response.ok) {
        toast.error("Something went wrong, please try again later.")
        return;
      }
      const data = await response.json();
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.mssage);
    } finally {
      setLoading(false);
    }
  }

  const handleTextInputChange = (e) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-inputField">
          <label htmlFor="user-name">Name</label>
          <input id='user-name' name='name' type="text" placeholder="Your name" value={userData.name} onChange={handleTextInputChange} />
          <label htmlFor="user-email">Email</label>
          <input type="email" name='email' placeholder="Email address" value={userData.email} onChange={handleTextInputChange} />
          <label htmlFor="user-pass">Password</label>
          <input type="password" name='password' placeholder="Password" value={userData.password} onChange={handleTextInputChange} />
        </div>
        <div className="login-termsAndCondition">
         <input id='terms-condition' type="checkbox" value={userData.TnCAgreed} />
         <label htmlFor="terms-condition">By continuing, i agree to the terms of use & privacy policy.</label>
        </div>
        <button onClick={handlelogin} disabled={loading}>{loading ? 'Loading...' : "Continue"}</button>
        <div className="login-here-text"> 
        {/* <img src={zaikaLogo} alt="" /> */}
          <p>
            Already have an account? <span>Login here</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup