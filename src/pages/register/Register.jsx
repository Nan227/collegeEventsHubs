import "./register.css";

export default function Register() {
  return (
    <div className = "login">
       <div className = "loginWrapper">
          <div className = "loginLeft">
            <h2 className = "loginLogo"> College Events Hub </h2>
            <span className=" loginDesc">Welcome to a  student all-in-one spot</span>
            
          </div>
          <div className = "loginRight">
            < div className = "loginBox">
            <input placeholder="User Name" className="loginInput"/>
            <input placeholder="Email" className="loginInput"/>
            <input placeholder="Password" className="loginInput"/>
            <input placeholder="Re-enter  Password" className="loginInput"/>
            <button className ="loginButton">Register</button>
            
            </div>
          </div>
       </div>
    </div>
  )
}
