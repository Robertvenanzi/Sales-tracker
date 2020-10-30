import React from 'react'
import '../../styles/Login.css'

const Login = () => {
    return (
        <div className="main_login">
            <div className="navbar_login">
                <div className="logo_login">
                    <div className="logo">Sales<span>TRACKER</span> </div>
                </div>
                <div className="nav_login"></div>
            </div>
            <div className="form_login">
                <p className="title_login"><span>Login</span> to your account</p>
                <div className="form_group__login">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
                <button className="form_submit__login">Submit</button>
                <a className="forgot_login">Forgot Password</a>
            </div>
        </div>
    )
}

export default Login