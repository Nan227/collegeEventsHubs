import "./login.css";

export default function login() {
  return (
    <div className = "login">
       <div className = "loginWrapper">
          <div className = "loginLeft">
            <h2 className = "loginLogo"> College Events Hub </h2>
            <span className=" loginDesc">Welcome to a  student all-in-one spot</span>
            
          </div>
          <div className = "loginRight">
            < div className = "loginBox">
            <input placeholder="Email" className="loginInput"/>
            <input placeholder="Password" className="loginInput"/>
            <button className ="loginButton">Log In</button>
            <span className ="loginForgot">Forgot Password</span>
            <span className ="loginRegister">Create a New Account</span>
            </div>
          </div>
       </div>
    </div>
  )
}
