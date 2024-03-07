import React from "react";
import "../components/Styles/Login.css";
import logo from "../Assets/FurrMe Logo.png";
import BannerImage from "../Assets/background img.jpg";
import { Link } from "react-router-dom";

/* CONVERT NALANG TO LINK ANG MGA <a> ug to ang href, niya nag classname exclusive css sa link ayaw ig .a{} sa css
    <Link to="#" className = "">
        <img className="pawLogo" src={logo} />
    </Link>

    ang inputs sad na css gamita ang tbxemail ayaw ang inputs{} kay maguba tanan na <inputs> sa jsx

*/
function Login() {
    return (
        <>
            <div className="LoginPage">
                <div className="login--background">
                    {" "}
                    {/* KANI LANG INAME SA CONTAINER ---PAGE*/}
                    <div className="login_container">
                        {/*HEADER*/}
                        <div className="header">
                            <Link to="/">
                                <img className="pawLogo" src={logo} />
                            </Link>
                            <Link to="/">
                                <h1>FurrMe</h1>
                            </Link>
                        </div>
                        {/*TAGLINE */}
                        <p className="tagline">
                            Homeless to Loved: Adopting Joy, One Paw at a Time.
                        </p>
                        {/* LBL*/}
                        <div className="lblLogin">
                            <div className="vertLine1"></div>
                            <h2 className="login_header">Login</h2>
                            <div className="vertLine2"></div>
                        </div>
                        {/* INPUTCONTAINER */}
                        <div className="inputContainer">
                            <div className="inputs email">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    className="tbxEmail"
                                />
                            </div>
                            <div className="inputs password">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="tbxPassword"
                                />
                            </div>
                            <Link to="/" className="forgotPassword">
                                Forgot Password?
                            </Link>
                            <Link to="/" className="btnLogin">
                                <button className="btnLogin">Login</button>
                            </Link>
                        </div>
                        {/* FOOTER */}
                        <p className="footer">
                            Don't have an account?
                            <Link to="/" className="createAccount">
                                Create an Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
