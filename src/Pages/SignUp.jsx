import React from "react";
import "../components/Styles/SignUp.css";
import PawLogo from "../Assets/FurrMe Logo.png";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="SignUpPage">
            <div className="signup--background">
                <div className="signup_container">
                    {/* HEADER */}
                    <div className="header">
                        <Link to="/">
                            <img className="pawLogo" src={PawLogo} />
                        </Link>
                        <Link to="/">
                            <h1>FurrMe</h1>
                        </Link>
                    </div>
                    {/* CRTACC */}
                    <div className="createAccntStruct">
                        <div className="vertLine"></div>
                        <h2>Create Account</h2>
                        <div className="vertLine"></div>
                    </div>
                    {/* INPUTS AYA IPAREHAS NAME SA INPUTS SA MGA COMMON FUNCTIONS h,a,p,input,button blabla*/}
                    <div className="inputs">
                        <div className="name">
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                            />
                        </div>
                        <input type="text" id="email" placeholder="Email" />
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                        />
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                        />
                        <Link to="/">
                            <button className="btnCreate">
                                Create Account
                            </button>
                        </Link>
                        <p className="disclaimer">
                            By creating an account, you agree to FurrMe's
                            <Link to="/"> Terms of Service</Link> and
                            <Link to="/"> Privacy Police</Link>
                        </p>
                        <p className="login">
                            Already have an account? <a href="#">Log In</a>
                        </p>
                    </div>
                    {/* FOOTER */}
                    <div className="footer">
                        <p>
                            <i className="fa-regular fa-copyright"></i>2024
                            FurrMe. All rights reserved.
                        </p>
                    </div>
                </div>
                {/* EXPLORE */}
                <div className="explore">
                    <div>
                        <p className="p_encouragement">
                            Join us in making a difference by opening your heart
                            and home to a pet in need today. Together, we can
                            create countless tail-wagging and purr-filled
                            moments of joy!
                        </p>
                        <Link to="/">
                            <button className="btnDiscover">Discover</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
