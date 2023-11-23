import "./login.css";

export default function login() {
  return (
    <div className = "login">
       <div className = "loginWrapper">
          <div className = "loginLeft">
            <h3 className = "loginLogo"> College Events Hubs </h3>
            <span className=" loginDesc">Welcome to Events Hubs </span>
            
          </div>
          <div className = "loginRight">
          <div className = "loginBox"></div>
            <input placeholder="Email" className="loginInput"/>
            <input placeholder="Password" className="loginInput"/>
            <button className ="loginButton">Log In</button>
            <span className ="loginForgot">Forgot Password</span>
            <button className ="loginRegisterButton">Create a New Account</button>
          </div>
       </div>
    </div>
  )
}
